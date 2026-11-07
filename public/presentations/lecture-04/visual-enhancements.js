// Keep example cards readable without shifting the narration timeline.
(() => {
  const normal = text => String(text || '').toLowerCase().normalize('NFC').replace(/[–—]/g, '-');
  const photos = window.LECTURE_KAZAKH_PHOTOS || [];
  const matching = text => photos.filter(p => p.phrases.some(phrase => normal(text).includes(normal(phrase))));
  window.LECTURE_IMAGE_MAP ||= {};
  for (const scene of window.LECTURE_TIMELINE.scenes) {
    for (const event of scene.visuals) {
      const photo = matching(event.title)[0];
      if (photo && !window.LECTURE_IMAGE_MAP[event.title]) window.LECTURE_IMAGE_MAP[event.title] = photo;
    }
  }
  const panel = document.createElement('section');
  panel.className = 'example-history'; panel.hidden = true;
  panel.setAttribute('aria-label', 'Примеры текущей темы');
  document.getElementById('stage').insertAdjacentElement('afterend', panel);
  let signature = '';
  window.renderLectureExamples = (time, scene, resolve) => {
    const scenes = window.LECTURE_TIMELINE.scenes;
    const end = scenes[scenes.indexOf(scene) + 1]?.at ?? window.LECTURE_TIMELINE.duration;
    const candidates = [];
    for (let i = 0; i < scene.visuals.length; i++) {
      const event = scene.visuals[i], finish = Math.min(end, event.until ?? scene.visuals[i + 1]?.at ?? end);
      const pieces = [{at:event.at,text:event.title}, ...(event.translation ? [{at:event.translationAt ?? event.at,text:event.translation}] : []), ...(event.additions || []).map(a=>({at:a.at,text:a.text}))];
      const original = resolve(event);
      if (original && event.art !== 'portrait') candidates.push({at:event.at,end:finish,title:event.title,image:original});
      for (const piece of pieces) for (const photo of matching(piece.text)) {
        const title = photo.phrases.find(p=>normal(piece.text).includes(normal(p))) || piece.text;
        candidates.push({at:piece.at,end:finish,title,image:photo});
      }
      // Brief spoken examples remain available for eight seconds, rather than flashing.
      if (finish - event.at < 3 && !/другой пример|ещё одна пара|рассмотрим|попробуйте|как выглядит|самостоятельное сравнение|от примера/i.test(event.title)) candidates.push({at:event.at,end:finish,title:event.title,image:original});
    }
    const unique = new Map();
    for (const item of candidates.filter(x=>x.at<=time && time<Math.min(end,Math.max(x.end,x.at+8))).sort((a,b)=>a.at-b.at)) unique.set(item.title,item);
    const visible = [...unique.values()].slice(-3);
    const next = JSON.stringify(visible.map(x=>[x.title,x.image?.src]));
    if (next === signature) return;
    signature = next; panel.hidden = !visible.length;
    panel.replaceChildren();
    if (!visible.length) return;
    const heading=document.createElement('h2');heading.textContent='Примеры этой темы';panel.append(heading);
    const grid=document.createElement('div');grid.className='example-history-grid';panel.append(grid);
    for (const item of visible) {
      const card=document.createElement('figure');
      if (item.image) {
        const img=document.createElement('img');img.src=item.image.src;img.alt=item.image.alt;img.loading='eager';card.append(img);
      }
      const caption=document.createElement('figcaption');caption.textContent=item.title;card.append(caption);
      if (item.image?.source) {
        const link=document.createElement('a');link.href=item.image.source;link.target='_blank';link.rel='noopener noreferrer';link.textContent=item.image.credit || 'Источник иллюстрации';card.append(link);
        if(item.image.licenseUrl){const license=document.createElement('a');license.href=item.image.licenseUrl;license.target='_blank';license.rel='noopener noreferrer';license.textContent=item.image.license;card.append(license);}
      }
      grid.append(card);
    }
  };
})();
