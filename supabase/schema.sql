-- Выполните файл целиком в Supabase SQL Editor.
create extension if not exists pgcrypto;
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null check (char_length(full_name) between 2 and 150),
  email text not null,
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz not null default now()
);
create table if not exists public.lesson_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id smallint not null check (lesson_id between 1 and 15),
  attempts integer not null default 0,
  best_score smallint not null default 0 check (best_score between 0 and 100),
  passed boolean not null default false,
  completed_at timestamptz,
  primary key (user_id, lesson_id)
);
create table if not exists public.final_results (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  attempts integer not null default 0,
  best_score smallint not null default 0 check (best_score between 0 and 100),
  passed boolean not null default false,
  completed_at timestamptz
);
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  certificate_number char(5) not null unique check (certificate_number ~ '^[0-9]{5}$'),
  issued_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.final_results enable row level security;
alter table public.certificates enable row level security;
create policy "profile own read" on public.profiles for select to authenticated using (id=auth.uid());
create policy "progress own read" on public.lesson_progress for select to authenticated using (user_id=auth.uid());
create policy "final own read" on public.final_results for select to authenticated using (user_id=auth.uid());
create policy "certificate own read" on public.certificates for select to authenticated using (user_id=auth.uid());

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.profiles(id,full_name,email)
  values(new.id,coalesce(nullif(trim(new.raw_user_meta_data->>'full_name'),''),'Студент'),coalesce(new.email,''));
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='admin')
$$;

create or replace function public.get_course_state()
returns jsonb language sql stable security definer set search_path=public as $$
select jsonb_build_object(
 'profile',(select to_jsonb(p) - 'id' from public.profiles p where p.id=auth.uid()),
 'lessons',coalesce((select jsonb_agg(to_jsonb(lp) - 'user_id' order by lp.lesson_id) from public.lesson_progress lp where lp.user_id=auth.uid()),'[]'::jsonb),
 'final',(select to_jsonb(fr) - 'user_id' from public.final_results fr where fr.user_id=auth.uid()),
 'certificate',(select jsonb_build_object('number',c.certificate_number,'issued_at',c.issued_at) from public.certificates c where c.user_id=auth.uid())
)
$$;

-- Ключи ответов не передаются клиенту: проверка выполняется в БД.
create or replace function public.submit_lesson_quiz(p_lesson_id integer,p_answers integer[])
returns jsonb language plpgsql security definer set search_path=public as $$
declare v_uid uuid:=auth.uid(); v_completed integer; v_correct integer:=0; v_score integer; v_key integer[];
begin
 if v_uid is null then raise exception 'Требуется вход'; end if;
 if p_lesson_id not between 1 and 15 or array_length(p_answers,1)<>3 then raise exception 'Некорректный тест'; end if;
 select count(*) into v_completed from public.lesson_progress lp where lp.user_id=v_uid and lp.passed;
 if p_lesson_id>v_completed+1 then raise exception 'Сначала завершите предыдущую лекцию'; end if;
 v_key:=array[(array[0,1,2,0,1,0,1,1,0,1,0,1,0,1,1])[p_lesson_id],1,2];
 for i in 1..3 loop if p_answers[i]=v_key[i] then v_correct:=v_correct+1; end if; end loop;
 v_score:=round(v_correct*100.0/3);
 insert into public.lesson_progress as lp(user_id,lesson_id,attempts,best_score,passed,completed_at)
 values(v_uid,p_lesson_id,1,v_score,v_score>=67,case when v_score>=67 then now() end)
 on conflict(user_id,lesson_id) do update set attempts=lp.attempts+1,best_score=greatest(lp.best_score,excluded.best_score),passed=lp.passed or excluded.passed,completed_at=coalesce(lp.completed_at,excluded.completed_at);
 return jsonb_build_object('score',v_score,'passed',v_score>=67);
end $$;

create or replace function public.submit_final_quiz(p_answers integer[])
returns jsonb language plpgsql security definer set search_path=public as $$
declare v_uid uuid:=auth.uid(); v_completed integer; v_correct integer:=0; v_score integer; v_key integer[]:=array[0,1,2,0,1,0,1,1,0,1,0,1,0,1,1]; v_number char(5);
begin
 if v_uid is null then raise exception 'Требуется вход'; end if;
 select count(*) into v_completed from public.lesson_progress lp where lp.user_id=v_uid and lp.passed;
 if v_completed<>15 then raise exception 'Сначала завершите 15 лекций'; end if;
 if array_length(p_answers,1)<>15 then raise exception 'Нужно ответить на 15 вопросов'; end if;
 for i in 1..15 loop if p_answers[i]=v_key[i] then v_correct:=v_correct+1; end if; end loop;
 v_score:=round(v_correct*100.0/15);
 insert into public.final_results as fr(user_id,attempts,best_score,passed,completed_at)
 values(v_uid,1,v_score,v_score>=70,case when v_score>=70 then now() end)
 on conflict(user_id) do update set attempts=fr.attempts+1,best_score=greatest(fr.best_score,excluded.best_score),passed=fr.passed or excluded.passed,completed_at=coalesce(fr.completed_at,excluded.completed_at);
 if v_score>=70 and not exists(select 1 from public.certificates c where c.user_id=v_uid) then
   loop v_number:=lpad((floor(random()*90000)+10000)::text,5,'0'); begin insert into public.certificates(user_id,certificate_number) values(v_uid,v_number); exit; exception when unique_violation then end; end loop;
 end if;
 return jsonb_build_object('score',v_score,'passed',v_score>=70,'certificate',(select c.certificate_number from public.certificates c where c.user_id=v_uid));
end $$;

create or replace function public.admin_course_records(p_search text default '')
returns table(full_name text,email text,completed bigint,mini_average numeric,final_score smallint,certificate_number char(5),issued_at timestamptz)
language plpgsql security definer set search_path=public as $$
begin
 if not public.is_admin() then raise exception 'Доступ только для преподавателя'; end if;
 return query select p.full_name,p.email,count(lp.lesson_id) filter(where lp.passed),round(avg(lp.best_score),1),fr.best_score,c.certificate_number,c.issued_at
 from public.profiles p left join public.lesson_progress lp on lp.user_id=p.id left join public.final_results fr on fr.user_id=p.id left join public.certificates c on c.user_id=p.id
 where p.role='student' and (coalesce(p_search,'')='' or p.full_name ilike '%'||p_search||'%' or p.email ilike '%'||p_search||'%' or c.certificate_number=p_search)
 group by p.id,p.full_name,p.email,fr.best_score,c.certificate_number,c.issued_at order by p.full_name;
end $$;
revoke all on function public.submit_lesson_quiz(integer,integer[]) from public;
revoke all on function public.submit_final_quiz(integer[]) from public;
revoke all on function public.get_course_state() from public;
revoke all on function public.admin_course_records(text) from public;
grant execute on function public.submit_lesson_quiz(integer,integer[]),public.submit_final_quiz(integer[]),public.get_course_state(),public.admin_course_records(text) to authenticated;
