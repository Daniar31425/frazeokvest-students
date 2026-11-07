export const presentationLinks = Object.freeze(Object.fromEntries(
  Array.from({ length: 15 }, (_, index) => {
    const order = index + 1;
    const folder = `lecture-${String(order).padStart(2, '0')}`;
    return [order, `/presentations/${folder}/index.html`];
  })
));

export function presentationCard(order, titleHtml) {
  const url = presentationLinks[order];
  if (!url) return '';
  return `<section class="presentation-card" aria-label="Презентация лекции ${order}"><div><span class="eyebrow">Лекция ${order} · ${titleHtml}</span><h2>Посмотрите объяснение темы</h2><p>Откройте презентацию здесь, а после просмотра переходите к материалу и тесту ниже.</p></div><details class="presentation-player"><summary class="btn btn-primary">Смотреть презентацию <span aria-hidden="true">▶</span></summary><iframe src="${url}" title="Интерактивная презентация лекции ${order}" loading="lazy" allow="fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></details></section>`;
}
