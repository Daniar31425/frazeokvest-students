// Show only illustrated expressions used by this lecture's timed examples.
(() => {
  const normalize = text => String(text || '').toLowerCase().normalize('NFC')
    .replaceAll('ё', 'е').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const examples = window.LECTURE_TIMELINE.scenes.flatMap(scene =>
    scene.visuals.flatMap(event => [
      event.title, event.translation, ...(event.additions || []).map(item => item.text)
    ])
  ).filter(Boolean).map(text => ` ${normalize(text)} `);
  const used = new Map();
  for (const photo of window.LECTURE_KAZAKH_PHOTOS || []) {
    const phrases = photo.phrases || [photo.phrase];
    if (phrases.some(phrase => examples.some(text => text.includes(` ${normalize(phrase)} `)))) {
      used.set(normalize(photo.phrase), photo);
    }
  }
  if (!used.size) return;
  const atlas = document.createElement('details');
  atlas.id = 'illustrated-atlas';
  atlas.className = 'illustrated-atlas';
  const summary = document.createElement('summary');
  summary.textContent = 'Иллюстрированный материал';
  atlas.append(summary);
  const grid = document.createElement('div');
  grid.className = 'illustrated-atlas-grid';
  for (const photo of used.values()) {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = 'lazy';
    const caption = document.createElement('figcaption');
    caption.textContent = photo.phrase;
    figure.append(image, caption);
    grid.append(figure);
  }
  atlas.append(grid);
  document.querySelector('.controls').insertAdjacentElement('afterend', atlas);
})();
