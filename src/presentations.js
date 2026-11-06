const slugs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
const localPresentationLinks = {
  6: '/presentations/lecture-06/index.html',
  11: '/presentations/lecture-11/index.html',
};

export const presentationLinks = Object.freeze(Object.fromEntries(slugs.map((slug, index) => [
  index + 1,
  localPresentationLinks[index + 1] ?? `https://frazeokvest-lecture-${slug}.chatgpt-edu-7368.chatgpt.site/`
])));

export function presentationCard(order) {
  const url = presentationLinks[order];
  if (!url) return '';
  return `<section class="presentation-card" aria-label="Презентация лекции ${order}"><div><span class="eyebrow">Лекция ${order} · Презентация с озвучкой</span><h2>Посмотрите объяснение темы</h2><p>Откройте презентацию здесь, а после просмотра переходите к материалу и тесту ниже.</p></div><details class="presentation-player"><summary class="btn btn-primary">Смотреть презентацию <span aria-hidden="true">▶</span></summary><iframe src="${url}" title="Интерактивная презентация лекции ${order}" loading="lazy" allow="fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></details></section>`;
}
