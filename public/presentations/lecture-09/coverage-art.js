// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Время от времени": {
    "src": "/presentation-assets/time.jpg",
    "alt": "Иллюстрация выражения «Время от времени»",
    "phrases": [
      "Время от времени"
    ],
    "phrase": "Время от времени"
  },
  "Развесить уши": {
    "src": "/presentation-assets/eavesdrop.jpg",
    "alt": "Иллюстрация выражения «Развесить уши»",
    "phrases": [
      "Развесить уши"
    ],
    "phrase": "Развесить уши"
  },
  "Намылить шею": {
    "src": "/presentation-assets/neck.jpg",
    "alt": "Иллюстрация выражения «Намылить шею»",
    "phrases": [
      "Намылить шею",
      "Ему намылили шею за опоздание"
    ],
    "phrase": "Намылить шею"
  },
  "Сесть в галошу": {
    "src": "/presentation-assets/galosh.jpg",
    "alt": "Иллюстрация выражения «Сесть в галошу»",
    "phrases": [
      "Сесть в галошу"
    ],
    "phrase": "Сесть в галошу"
  },
  "Хранить олимпийское спокойствие": {
    "src": "/presentation-assets/calm.jpg",
    "alt": "Иллюстрация выражения «Хранить олимпийское спокойствие»",
    "phrases": [
      "Хранить олимпийское спокойствие"
    ],
    "phrase": "Хранить олимпийское спокойствие"
  },
  "Без царя в голове": {
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
  },
  "Повар работал не покладая рук": {
    "src": "/presentation-assets/illustration-069.jpg",
    "alt": "Иллюстрация выражения «Не покладая рук»",
    "phrases": [
      "Не покладая рук",
      "Он работал не покладая рук",
      "Работать не покладая рук",
      "Работал не покладая рук",
      "Повар работал не покладая рук"
    ],
    "phrase": "Не покладая рук"
  },
  "Не покладая рук": {
    "src": "/presentation-assets/illustration-069.jpg",
    "alt": "Иллюстрация выражения «Не покладая рук»",
    "phrases": [
      "Не покладая рук",
      "Он работал не покладая рук",
      "Работать не покладая рук",
      "Работал не покладая рук",
      "Повар работал не покладая рук"
    ],
    "phrase": "Не покладая рук"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/time.jpg",
    "alt": "Иллюстрация выражения «Время от времени»",
    "phrases": [
      "Время от времени"
    ],
    "phrase": "Время от времени"
  },
  {
    "src": "/presentation-assets/eavesdrop.jpg",
    "alt": "Иллюстрация выражения «Развесить уши»",
    "phrases": [
      "Развесить уши"
    ],
    "phrase": "Развесить уши"
  },
  {
    "src": "/presentation-assets/neck.jpg",
    "alt": "Иллюстрация выражения «Намылить шею»",
    "phrases": [
      "Намылить шею",
      "Ему намылили шею за опоздание"
    ],
    "phrase": "Намылить шею"
  },
  {
    "src": "/presentation-assets/galosh.jpg",
    "alt": "Иллюстрация выражения «Сесть в галошу»",
    "phrases": [
      "Сесть в галошу"
    ],
    "phrase": "Сесть в галошу"
  },
  {
    "src": "/presentation-assets/calm.jpg",
    "alt": "Иллюстрация выражения «Хранить олимпийское спокойствие»",
    "phrases": [
      "Хранить олимпийское спокойствие"
    ],
    "phrase": "Хранить олимпийское спокойствие"
  },
  {
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
  },
  {
    "src": "/presentation-assets/illustration-069.jpg",
    "alt": "Иллюстрация выражения «Не покладая рук»",
    "phrases": [
      "Не покладая рук",
      "Он работал не покладая рук",
      "Работать не покладая рук",
      "Работал не покладая рук",
      "Повар работал не покладая рук"
    ],
    "phrase": "Не покладая рук"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();

(() => {
 const image = {src:'/presentation-assets/tireless-chef.jpg',alt:'Повар усердно готовит у нескольких кастрюль',phrase:'Не покладая рук',phrases:['Повар работал не покладая рук','Не покладая рук']};
 window.LECTURE_IMAGE_MAP['Повар работал не покладая рук'] = image;
 window.LECTURE_IMAGE_MAP['Не покладая рук'] = image;
 for (const photo of window.LECTURE_KAZAKH_PHOTOS) {
  if (photo.phrases?.includes('Не покладая рук')) photo.src=image.src;
 }
})();
