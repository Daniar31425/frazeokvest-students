// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Заварить кашу": {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
  },
  "Расхлёбывать кашу": {
    "src": "/presentation-assets/illustration-022.jpg",
    "alt": "Иллюстрация выражения «Расхлёбывать кашу»",
    "phrases": [
      "Расхлёбывать кашу"
    ],
    "phrase": "Расхлёбывать кашу"
  },
  "Шито белыми нитками": {
    "src": "/presentation-assets/illustration-135.jpg",
    "alt": "Иллюстрация выражения «Шито белыми нитками»",
    "phrases": [
      "Шито белыми нитками"
    ],
    "phrase": "Шито белыми нитками"
  },
  "Қой аузынан шөп алмас": {
    "src": "/presentation-assets/illustration-144.jpg",
    "alt": "Иллюстрация выражения «Қой аузынан шөп алмас»",
    "phrases": [
      "Қой аузынан шөп алмас"
    ],
    "phrase": "Қой аузынан шөп алмас"
  },
  "Русское: мухи не обидит": {
    "src": "/presentation-assets/illustration-106.jpg",
    "alt": "Иллюстрация выражения «Мухи не обидит»",
    "phrases": [
      "Мухи не обидит"
    ],
    "phrase": "Мухи не обидит"
  },
  "Ат үстінен қарау": {
    "src": "/presentation-assets/illustration-142.jpg",
    "alt": "Иллюстрация выражения «Ат үстінен қарау»",
    "phrases": [
      "Ат үстінен қарау"
    ],
    "phrase": "Ат үстінен қарау"
  },
  "Манна небесная": {
    "src": "/presentation-assets/manna.jpg",
    "alt": "Иллюстрация выражения «Манна небесная»",
    "phrases": [
      "Манна небесная"
    ],
    "phrase": "Манна небесная"
  },
  "Соль земли": {
    "src": "/presentation-assets/salt.jpg",
    "alt": "Иллюстрация выражения «Соль земли»",
    "phrases": [
      "Соль земли"
    ],
    "phrase": "Соль земли"
  },
  "Зарыть талант в землю": {
    "src": "/presentation-assets/talent.jpg",
    "alt": "Иллюстрация выражения «Зарыть талант в землю»",
    "phrases": [
      "Зарыть талант в землю"
    ],
    "phrase": "Зарыть талант в землю"
  },
  "Ахиллесова пята": {
    "src": "/presentation-assets/illustration-092.jpg",
    "alt": "Иллюстрация выражения «Ахиллесова пята»",
    "phrases": [
      "Ахиллесова пята"
    ],
    "phrase": "Ахиллесова пята"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
  },
  {
    "src": "/presentation-assets/illustration-022.jpg",
    "alt": "Иллюстрация выражения «Расхлёбывать кашу»",
    "phrases": [
      "Расхлёбывать кашу"
    ],
    "phrase": "Расхлёбывать кашу"
  },
  {
    "src": "/presentation-assets/illustration-135.jpg",
    "alt": "Иллюстрация выражения «Шито белыми нитками»",
    "phrases": [
      "Шито белыми нитками"
    ],
    "phrase": "Шито белыми нитками"
  },
  {
    "src": "/presentation-assets/illustration-144.jpg",
    "alt": "Иллюстрация выражения «Қой аузынан шөп алмас»",
    "phrases": [
      "Қой аузынан шөп алмас"
    ],
    "phrase": "Қой аузынан шөп алмас"
  },
  {
    "src": "/presentation-assets/illustration-106.jpg",
    "alt": "Иллюстрация выражения «Мухи не обидит»",
    "phrases": [
      "Мухи не обидит"
    ],
    "phrase": "Мухи не обидит"
  },
  {
    "src": "/presentation-assets/illustration-142.jpg",
    "alt": "Иллюстрация выражения «Ат үстінен қарау»",
    "phrases": [
      "Ат үстінен қарау"
    ],
    "phrase": "Ат үстінен қарау"
  },
  {
    "src": "/presentation-assets/manna.jpg",
    "alt": "Иллюстрация выражения «Манна небесная»",
    "phrases": [
      "Манна небесная"
    ],
    "phrase": "Манна небесная"
  },
  {
    "src": "/presentation-assets/salt.jpg",
    "alt": "Иллюстрация выражения «Соль земли»",
    "phrases": [
      "Соль земли"
    ],
    "phrase": "Соль земли"
  },
  {
    "src": "/presentation-assets/talent.jpg",
    "alt": "Иллюстрация выражения «Зарыть талант в землю»",
    "phrases": [
      "Зарыть талант в землю"
    ],
    "phrase": "Зарыть талант в землю"
  },
  {
    "src": "/presentation-assets/illustration-092.jpg",
    "alt": "Иллюстрация выражения «Ахиллесова пята»",
    "phrases": [
      "Ахиллесова пята"
    ],
    "phrase": "Ахиллесова пята"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();

window.LECTURE_IMAGE_MAP['Сизифов труд'] = {
 src: '/presentation-assets/sisyphus.png',
 alt: 'Сизиф толкает тяжёлый камень вверх по склону',
 phrase: 'Сизифов труд', phrases: ['Сизифов труд']
};
window.LECTURE_KAZAKH_PHOTOS.push(window.LECTURE_IMAGE_MAP['Сизифов труд']);
