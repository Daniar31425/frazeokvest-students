import './styles.css';
import { finalQuestions } from './course.js';
import { courseApi, isSupabaseConfigured } from './supabase.js';

const app = document.querySelector('#app');
const storageKey = 'frazeokvest-students-demo';
const state = JSON.parse(localStorage.getItem(storageKey) || 'null') || {
  screen: 'auth', mode: 'login', name: 'Студент', email: '', role: 'student',
  completed: [], scores: {}, final: null, certificate: null, current: 1
};
let course;
let lessons = [];

const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
const textOf = item => item?.text_md || item?.text || item?.label || item?.title || item?.id || '';
const logo = () => '<div class="brand"><div class="brand-mark">Ф</div><span>Фразеология</span></div>';

function markdown(source = '') {
  let value = escapeHtml(source)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
  const lines = value.split(/\r?\n/);
  let html = '', list = null;
  const closeList = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const line of lines) {
    const bullet = line.match(/^\s*[-–]\s+(.+)/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)/);
    if (bullet || numbered) {
      const type = bullet ? 'ul' : 'ol';
      if (list !== type) { closeList(); html += `<${type}>`; list = type; }
      html += `<li>${bullet?.[1] || numbered?.[1]}</li>`;
    } else {
      closeList();
      if (line.trim()) html += `<p>${line}</p>`;
    }
  }
  closeList();
  return html;
}

function shell(content, active = 'course') {
  const admin = state.role === 'admin' || !isSupabaseConfigured;
  return `<div class="app-shell"><header class="topbar">${logo()}<div class="user"><div class="avatar">${escapeHtml(state.name[0] || 'С')}</div><span><strong>${escapeHtml(state.name)}</strong><br><small>${state.role === 'admin' ? 'Преподаватель' : 'Студенческий курс'}</small></span></div></header><div class="workspace"><nav class="sidebar"><small>ОБУЧЕНИЕ</small><button data-go="course" class="${active === 'course' ? 'active' : ''}">Мой курс</button><button data-go="final" class="${active === 'final' ? 'active' : ''}">Итоговый тест</button><button data-go="certificate" class="${active === 'certificate' ? 'active' : ''}">Сертификат</button>${admin ? `<small>УПРАВЛЕНИЕ</small><button data-go="admin" class="${active === 'admin' ? 'active' : ''}">Админ-панель</button>` : ''}<button data-action="logout">Выйти</button></nav><main class="content">${content}</main></div></div>`;
}

function renderAuth(message = '') {
  app.innerHTML = `<main class="auth-wrap"><section class="auth-card">${logo()}<span class="eyebrow">Массовый онлайн-курс</span><h1>${state.mode === 'register' ? 'Создать аккаунт' : 'Войти в курс'}</h1><p class="muted">15 полноценных уроков, тесты после каждой темы и итоговая проверка.</p>${message ? `<div class="notice">${escapeHtml(message)}</div>` : !isSupabaseConfigured ? '<div class="notice">Supabase не настроен — доступен локальный демо-режим.</div>' : ''}<form data-form="auth">${state.mode === 'register' ? '<label class="field">ФИО<input name="name" required placeholder="Иванов Иван Иванович"></label>' : ''}<label class="field">Email<input name="email" type="email" required></label><label class="field">Пароль<input name="password" type="password" required minlength="6"></label><button class="btn btn-primary">${state.mode === 'register' ? 'Зарегистрироваться' : 'Войти'}</button></form><button class="link-btn" data-action="toggle-auth">${state.mode === 'register' ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Регистрация'}</button>${!isSupabaseConfigured ? '<button class="btn btn-outline demo" data-action="demo">Открыть демо курса</button>' : ''}</section></main>`;
}

function dashboard() {
  const done = state.completed.length;
  const moduleBlocks = course.modules.map(module => {
    const cards = module.lessons.map(lesson => {
      const index = lesson.order - 1;
      const passed = state.completed.includes(lesson.order);
      const locked = index > done;
      return `<button class="lesson-card" data-lesson="${lesson.order}" ${locked ? 'disabled' : ''}><span class="lesson-no">${passed ? '✓' : lesson.order}</span><div class="lesson-meta">${lesson.estimated_minutes} мин</div><h3>${escapeHtml(lesson.short_title || lesson.title)}</h3><p>${escapeHtml(lesson.title)}</p><span class="status">${passed ? `Пройдено · ${state.scores[lesson.order]}%` : index === done ? 'Изучить материал' : 'Откроется позже'}</span></button>`;
    }).join('');
    return `<section class="module-block"><div class="section-head"><div><span class="eyebrow">Модуль ${module.order}</span><h2>${escapeHtml(module.title)}</h2></div></div><div class="lesson-list">${cards}</div></section>`;
  }).join('');
  app.innerHTML = shell(`<section class="hero"><span class="eyebrow">${escapeHtml(course.title)}</span><h1>${escapeHtml(course.subtitle)}</h1>${markdown(course.description_md)}<div class="progress-row"><span>Прогресс курса</span><span>${done} / 15</span></div><div class="progress"><i style="width:${Math.round(done / 15 * 100)}%"></i></div></section>${moduleBlocks}<button class="final-card ${done < 15 ? 'locked' : ''}" data-go="final" ${done < 15 ? 'disabled' : ''}><span class="eyebrow">Финальный этап</span><h2>Итоговый тест по всем темам</h2><p>${done < 15 ? 'Откроется после успешной сдачи всех тестов.' : 'Все уроки пройдены — можно начинать.'}</p></button>`, 'course');
}

function renderBlock(block) {
  if (block.type === 'text') return `<div class="reading-text">${markdown(block.md)}</div>`;
  if (block.type === 'table') return `<div class="course-table">${block.caption ? `<p class="table-caption">${escapeHtml(block.caption)}</p>` : ''}<table><thead><tr>${block.headers.map(h => `<th>${markdown(h)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${markdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (block.type === 'callout') return `<aside class="callout ${block.variant || 'remember'}"><strong>${escapeHtml(block.title || 'Обратите внимание')}</strong>${markdown(block.md)}</aside>`;
  if (block.type === 'think') return `<details class="think"><summary>Остановитесь и подумайте</summary>${markdown(block.prompt_md)}<details><summary>Показать ответ</summary>${markdown(block.answer_md)}</details></details>`;
  return '';
}

function renderItem(item) {
  if (item.type === 'intro') return `<section class="lesson-intro"><span class="eyebrow">Введение</span>${markdown(item.hook_md)}<h2>После урока вы сможете</h2><ul>${item.objectives.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></section>`;
  if (item.type === 'reading') return `<section class="reading-section"><h2>${escapeHtml(item.title)}</h2>${item.blocks.map(renderBlock).join('')}</section>`;
  if (item.type === 'key_terms') return `<section><h2>${escapeHtml(item.title)}</h2><dl class="terms">${item.terms.map(x => `<div><dt>${escapeHtml(x.term)}</dt><dd>${markdown(x.definition)}</dd></div>`).join('')}</dl></section>`;
  if (item.type === 'recap') return `<section><h2>${escapeHtml(item.title)}</h2><ol class="recap">${item.points.map(x => `<li>${markdown(x)}</li>`).join('')}</ol></section>`;
  if (item.type === 'practice') return `<section><h2>${escapeHtml(item.title)}</h2><div class="practice-list">${item.tasks.map((task, i) => `<article><h3>Задание ${i + 1}</h3>${markdown(task.prompt_md)}<textarea placeholder="Запишите свой ответ..."></textarea>${task.self_check ? `<details><summary>Показать эталон и критерии</summary>${markdown(task.reference_answer_md || task.criteria_md)}</details>` : '<p class="teacher-review">Ответ проверяет преподаватель</p>'}</article>`).join('')}</div></section>`;
  if (item.type === 'references') return `<details class="references"><summary>${escapeHtml(item.title)}</summary>${markdown(item.entries_md)}</details>`;
  return '';
}

function lessonView(id) {
  const lesson = lessons[id - 1];
  state.current = id; save();
  const content = lesson.items.filter(item => item.type !== 'quiz').map(renderItem).join('');
  app.innerHTML = shell(`<button class="back" data-go="course">← К учебному плану</button><article class="article rich-lesson"><div class="lesson-heading"><span class="eyebrow">Урок ${lesson.order} из 15 · ${lesson.estimated_minutes} минут</span><h1>${escapeHtml(lesson.title)}</h1><p class="lead">${escapeHtml(lesson.audience_note || '')}</p></div>${content}<div class="lesson-finish"><p><strong>Материал изучен?</strong> Проверьте себя по вопросам из исходной лекции.</p><button class="btn btn-primary" data-action="start-quiz">Перейти к тесту</button></div></article>`, 'course');
}

function optionInput(question, option, index, multiple = false) {
  return `<label class="option"><input type="${multiple ? 'checkbox' : 'radio'}" name="${question.id}" value="${escapeHtml(option.id)}" ${multiple ? '' : 'required'}><span>${markdown(textOf(option))}</span></label>`;
}

function questionHtml(question, number) {
  const title = `<legend>${number}. ${markdown(question.prompt_md)}</legend>`;
  if (question.type === 'single_choice' || question.type === 'multiple_choice') return `<fieldset data-question="${question.id}" data-type="${question.type}">${title}${question.options.map((o, i) => optionInput(question, o, i, question.type === 'multiple_choice')).join('')}</fieldset>`;
  if (question.type === 'matching') return `<fieldset data-question="${question.id}" data-type="matching">${title}${question.left.map(left => `<label class="select-row"><span>${markdown(textOf(left))}</span><select name="${question.id}-${left.id}" required><option value="">Выберите соответствие</option>${question.right.map(right => `<option value="${escapeHtml(right.id)}">${escapeHtml(textOf(right))}</option>`).join('')}</select></label>`).join('')}</fieldset>`;
  if (question.type === 'ordering') return `<fieldset data-question="${question.id}" data-type="ordering">${title}${question.items.map(item => `<label class="select-row"><span>${markdown(textOf(item))}</span><select name="${question.id}-${item.id}" required><option value="">Позиция</option>${question.items.map((_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}</select></label>`).join('')}</fieldset>`;
  if (question.type === 'classification') return `<fieldset data-question="${question.id}" data-type="classification">${title}${question.items.map(item => `<label class="select-row"><span>${markdown(textOf(item))}</span><select name="${question.id}-${item.id}" required><option value="">Выберите категорию</option>${question.categories.map(category => `<option value="${escapeHtml(category.id)}">${escapeHtml(textOf(category))}</option>`).join('')}</select></label>`).join('')}</fieldset>`;
  return '';
}

function quizView() {
  const lesson = lessons[state.current - 1];
  const quiz = lesson.items.find(item => item.type === 'quiz');
  app.innerHTML = shell(`<button class="back" data-lesson="${lesson.order}">← Вернуться к материалу</button><section class="test-card"><span class="eyebrow">Тест · Урок ${lesson.order}</span><h1>${escapeHtml(quiz.title)}</h1><p class="muted">${quiz.questions.length} заданий из исходного материала. Зачёт — от ${quiz.pass_percent}%.</p><form data-form="quiz">${quiz.questions.map(questionHtml).join('')}<button class="btn btn-primary">Проверить ответы</button></form></section>`, 'course');
}

const sameSet = (a, b) => a.length === b.length && a.every(value => b.includes(value));
function gradeQuiz(form, quiz) {
  const data = new FormData(form);
  let earned = 0;
  for (const q of quiz.questions) {
    const points = Number(q.points || 1);
    if (q.type === 'single_choice' || q.type === 'multiple_choice') {
      if (sameSet(data.getAll(q.id), q.correct.map(String))) earned += points;
    } else if (q.type === 'matching') {
      const rows = q.left.filter(left => (q.pairs[left.id] || []).map(String).includes(String(data.get(`${q.id}-${left.id}`)))).length;
      earned += points * rows / q.left.length;
    } else if (q.type === 'ordering') {
      const order = [...q.items].sort((a, b) => Number(data.get(`${q.id}-${a.id}`)) - Number(data.get(`${q.id}-${b.id}`))).map(item => String(item.id));
      if (sameSet(order.map((x, i) => `${i}:${x}`), q.correct_order.map((x, i) => `${i}:${x}`))) earned += points;
    } else if (q.type === 'classification') {
      const rows = q.items.filter(item => String(data.get(`${q.id}-${item.id}`)) === String(q.assignment[item.id])).length;
      earned += points * rows / q.items.length;
    }
  }
  return Math.round(earned / Number(quiz.max_points || quiz.questions.length) * 100);
}

function resultView(score, passed) {
  const next = state.current < 15 ? `<button class="btn btn-primary next-lesson" data-lesson="${state.current + 1}">Следующий урок <span>→</span></button>` : '<button class="btn btn-primary next-lesson" data-go="final">Перейти к итоговому тесту <span>→</span></button>';
  app.innerHTML = shell(`<section class="result ${passed ? 'success' : 'fail'}"><div class="result-icon">${passed ? '✓' : '!'}</div><span class="eyebrow">Результат теста</span><h1>${score}%</h1><p>${passed ? 'Урок завершён. Следующая тема открыта.' : 'Повторите материал и попробуйте снова.'}</p><div class="actions">${passed ? next : '<button class="btn btn-primary" data-go="course">К учебному плану</button>'}<button class="btn btn-outline" data-lesson="${state.current}">Повторить материал</button></div></section>`, 'course');
}

function finalView() {
  if (state.completed.length < 15) { app.innerHTML = shell('<section class="empty"><h1>Итоговый тест пока закрыт</h1><p>Сначала завершите все 15 уроков.</p><button class="btn btn-primary" data-go="course">Продолжить обучение</button></section>', 'final'); return; }
  app.innerHTML = shell(`<section class="test-card"><span class="eyebrow">Финальная проверка</span><h1>Итоговый тест по 15 темам</h1><form data-form="final">${finalQuestions.map((q, i) => `<fieldset><legend>${i + 1}. ${escapeHtml(q.question)}</legend>${q.options.map((o, j) => `<label class="option"><input type="radio" name="q${i}" value="${j}" required><span>${escapeHtml(o)}</span></label>`).join('')}</fieldset>`).join('')}<button class="btn btn-primary">Завершить тест</button></form></section>`, 'final');
}

function certificateView() {
  if (!state.certificate) { app.innerHTML = shell('<section class="empty"><h1>Сертификат ещё не выдан</h1><p>Он появится после успешной сдачи итогового теста.</p></section>', 'certificate'); return; }
  app.innerHTML = shell(`<section class="certificate"><div class="cert-logo">Ф</div><span>МАССОВЫЙ ОНЛАЙН-КУРС</span><h1>Сертификат</h1><p>подтверждает, что</p><h2>${escapeHtml(state.name)}</h2><p>успешно завершил(а) курс<br><strong>«${escapeHtml(course.title)}»</strong></p><div class="cert-meta"><span>Уровень<br><strong>Студенческий · High level</strong></span><span>Дата<br><strong>${state.certificate.date}</strong></span><span>№ сертификата<br><strong>${state.certificate.number}</strong></span></div></section><button class="btn btn-primary print" data-action="print">Скачать / печать</button>`, 'certificate');
}

async function adminView(search = '') {
  let rows = [{full_name: state.name, email: state.email, completed: state.completed.length, final_score: state.final, certificate_number: state.certificate?.number}];
  if (isSupabaseConfigured) { if (state.role !== 'admin') return go('course'); const response = await courseApi.adminSearch(search); rows = response.error ? [] : response.data || []; }
  const body = rows.map(row => `<tr><td>${escapeHtml(row.full_name)}</td><td>${escapeHtml(row.email)}</td><td>${row.completed}/15</td><td>${row.final_score ? `${row.final_score}%` : '—'}</td><td>${row.certificate_number || '—'}</td></tr>`).join('') || '<tr><td colspan="5">Ничего не найдено</td></tr>';
  app.innerHTML = shell(`<section class="admin-head"><span class="eyebrow">Панель преподавателя</span><h1>Учащиеся и результаты</h1><form data-form="admin-search"><input name="search" class="search" value="${escapeHtml(search)}" placeholder="ФИО, email или номер"><button class="btn btn-primary">Найти</button></form></section><div class="table-wrap"><table><thead><tr><th>ФИО</th><th>Email</th><th>Прогресс</th><th>Итог</th><th>Сертификат</th></tr></thead><tbody>${body}</tbody></table></div>`, 'admin');
}

function gradeFinal(form) { const data = new FormData(form); return Math.round(finalQuestions.filter((q, i) => Number(data.get(`q${i}`)) === q.correct).length / finalQuestions.length * 100); }
function go(screen) { state.screen = screen; save(); ({course:dashboard, final:finalView, certificate:certificateView, admin:adminView}[screen] || dashboard)(); }

document.addEventListener('click', async event => {
  const button = event.target.closest('button'); if (!button) return;
  if (button.dataset.action === 'demo') { state.screen = 'course'; save(); dashboard(); }
  if (button.dataset.action === 'toggle-auth') { state.mode = state.mode === 'login' ? 'register' : 'login'; renderAuth(); }
  if (button.dataset.action === 'logout') { if (isSupabaseConfigured) await courseApi.logout(); state.screen = 'auth'; save(); renderAuth(); }
  if (button.dataset.action === 'start-quiz') quizView();
  if (button.dataset.action === 'print') window.print();
  if (button.dataset.go) go(button.dataset.go);
  if (button.dataset.lesson) lessonView(Number(button.dataset.lesson));
});

document.addEventListener('submit', async event => {
  event.preventDefault(); const form = event.target;
  if (form.dataset.form === 'admin-search') return adminView(new FormData(form).get('search'));
  if (form.dataset.form === 'auth') {
    const data = new FormData(form), name = data.get('name') || state.name, email = data.get('email'), password = data.get('password');
    if (isSupabaseConfigured) { const response = state.mode === 'register' ? await courseApi.register(name, email, password) : await courseApi.login(email, password); if (response.error) return renderAuth(response.error.message); await hydrateRemote(); }
    state.name = name; state.email = email; state.screen = 'course'; save(); return dashboard();
  }
  if (form.dataset.form === 'quiz') {
    const quiz = lessons[state.current - 1].items.find(item => item.type === 'quiz');
    const score = gradeQuiz(form, quiz), passed = score >= quiz.pass_percent;
    if (isSupabaseConfigured) { const response = await courseApi.recordLesson(state.current, score); if (response.error) return resultView(0, false); }
    state.scores[state.current] = Math.max(state.scores[state.current] || 0, score);
    if (passed && !state.completed.includes(state.current)) state.completed.push(state.current);
    save(); return resultView(score, passed);
  }
  if (form.dataset.form === 'final') {
    let score = gradeFinal(form), passed = score >= 70, number;
    if (isSupabaseConfigured) { const answers = finalQuestions.map((_, i) => Number(new FormData(form).get(`q${i}`))); const response = await courseApi.submitFinal(answers); if (response.error) return; score = response.data.score; passed = response.data.passed; number = response.data.certificate; }
    state.final = Math.max(state.final || 0, score);
    if (passed && !state.certificate) state.certificate = {number: number || String(Math.floor(10000 + Math.random() * 90000)), date: new Date().toLocaleDateString('ru-RU')};
    save(); return passed ? certificateView() : resultView(score, false);
  }
});

async function hydrateRemote() {
  const {data} = await courseApi.state(); if (!data) return;
  state.name = data.profile?.full_name || state.name; state.email = data.profile?.email || state.email; state.role = data.profile?.role || 'student';
  state.completed = (data.lessons || []).filter(x => x.passed).map(x => x.lesson_id);
  state.scores = Object.fromEntries((data.lessons || []).map(x => [x.lesson_id, x.best_score])); state.final = data.final?.best_score || null;
  if (data.certificate) state.certificate = {number:data.certificate.number, date:new Date(data.certificate.issued_at).toLocaleDateString('ru-RU')}; save();
}

async function bootstrap() {
  const response = await fetch('/course.json'); course = await response.json(); lessons = course.modules.flatMap(module => module.lessons).sort((a, b) => a.order - b.order);
  if (isSupabaseConfigured) { const {data} = await courseApi.session(); if (data.session) { await hydrateRemote(); state.screen = 'course'; return dashboard(); } state.screen = 'auth'; }
  state.screen === 'auth' ? renderAuth() : go(state.screen);
}
bootstrap().catch(error => { app.innerHTML = `<main class="auth-wrap"><section class="auth-card"><h1>Не удалось загрузить курс</h1><p>${escapeHtml(error.message)}</p></section></main>`; });
