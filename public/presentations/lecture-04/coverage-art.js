// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Бить баклуши": {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
  },
  "Попасть впросак": {
    "src": "/presentation-assets/illustration-136.jpg",
    "alt": "Иллюстрация выражения «Попасть впросак»",
    "phrases": [
      "Попасть впросак"
    ],
    "phrase": "Попасть впросак"
  },
  "Плыть по течению": {
    "src": "/presentation-assets/illustration-041.jpg",
    "alt": "Иллюстрация выражения «Плыть по течению»",
    "phrases": [
      "Плыть по течению"
    ],
    "phrase": "Плыть по течению"
  },
  "Держать камень за пазухой": {
    "src": "/presentation-assets/stone.jpg",
    "alt": "Иллюстрация выражения «Держать камень за пазухой»",
    "phrases": [
      "Держать камень за пазухой"
    ],
    "phrase": "Держать камень за пазухой"
  },
  "Зарыть талант в землю": {
    "src": "/presentation-assets/talent.jpg",
    "alt": "Иллюстрация выражения «Зарыть талант в землю»",
    "phrases": [
      "Зарыть талант в землю"
    ],
    "phrase": "Зарыть талант в землю"
  },
  "Закадычный друг": {
    "src": "/presentation-assets/illustration-042.jpg",
    "alt": "Иллюстрация выражения «Закадычный друг»",
    "phrases": [
      "Закадычный друг"
    ],
    "phrase": "Закадычный друг"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
  },
  {
    "src": "/presentation-assets/illustration-136.jpg",
    "alt": "Иллюстрация выражения «Попасть впросак»",
    "phrases": [
      "Попасть впросак"
    ],
    "phrase": "Попасть впросак"
  },
  {
    "src": "/presentation-assets/illustration-041.jpg",
    "alt": "Иллюстрация выражения «Плыть по течению»",
    "phrases": [
      "Плыть по течению"
    ],
    "phrase": "Плыть по течению"
  },
  {
    "src": "/presentation-assets/stone.jpg",
    "alt": "Иллюстрация выражения «Держать камень за пазухой»",
    "phrases": [
      "Держать камень за пазухой"
    ],
    "phrase": "Держать камень за пазухой"
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
    "src": "/presentation-assets/illustration-042.jpg",
    "alt": "Иллюстрация выражения «Закадычный друг»",
    "phrases": [
      "Закадычный друг"
    ],
    "phrase": "Закадычный друг"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
