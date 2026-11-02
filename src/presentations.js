const slugs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

export const presentationLinks = Object.freeze(Object.fromEntries(slugs.map((slug, index) => [
  index + 1,
  `https://frazeokvest-lecture-${slug}.${index === 10 ? 'brinylamp65' : 'chatgpt-edu-7368'}.chatgpt.site/`
])));

export function presentationCard(order) {
  const url = presentationLinks[order];
  if (!url) return '';
  return `<section class="presentation-card" aria-label="Презентация лекции ${order}"><div><span class="eyebrow">Лекция ${order} · Презентация с озвучкой</span><h2>Посмотрите объяснение темы</h2><p>Текст и примеры появляются вместе с озвучкой. После просмотра вернитесь на эту страницу и пройдите тест.</p></div><a class="btn btn-primary" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Смотреть презентацию лекции ${order} — откроется в новой вкладке">Смотреть презентацию <span aria-hidden="true">↗</span></a><small>Откроется в новой вкладке</small></section>`;
}
