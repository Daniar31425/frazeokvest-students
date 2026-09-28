import { createClient } from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const isSupabaseConfigured=Boolean(url&&key);
export const supabase=isSupabaseConfigured?createClient(url,key):null;
export const courseApi={
 register:(fullName,email,password)=>supabase.auth.signUp({email,password,options:{data:{full_name:fullName}}}),
 login:(email,password)=>supabase.auth.signInWithPassword({email,password}),
 logout:()=>supabase.auth.signOut(),
 session:()=>supabase.auth.getSession(),
 state:()=>supabase.rpc('student_get_course_state'),
 submitLesson:(lessonId,answers)=>supabase.rpc('student_submit_lesson_quiz',{p_lesson_id:lessonId,p_answers:answers}),
 submitFinal:answers=>supabase.rpc('student_submit_final_quiz',{p_answers:answers}),
 adminSearch:search=>supabase.rpc('student_admin_course_records',{p_search:search})
};
