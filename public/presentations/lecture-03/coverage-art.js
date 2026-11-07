// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Протянуть руку вперёд": {
    "src": "/presentation-assets/hand.jpg",
    "alt": "Иллюстрация выражения «Протянуть руку вперёд»",
    "phrases": [
      "Протянуть руку вперёд"
    ],
    "phrase": "Протянуть руку вперёд"
  },
  "Протянуть руку помощи": {
    "src": "/presentation-assets/illustration-029.jpg",
    "alt": "Иллюстрация выражения «Қол созу»",
    "phrases": [
      "Қол созу",
      "Протянуть руку помощи"
    ],
    "phrase": "Қол созу"
  },
  "Бить баклуши": {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
  },
  "Протянуть ноги": {
    "src": "/presentation-assets/illustration-065.jpg",
    "alt": "Иллюстрация выражения «Протянуть ноги»",
    "phrases": [
      "Протянуть ноги"
    ],
    "phrase": "Протянуть ноги"
  },
  "Собака на сене": {
    "src": "/presentation-assets/illustration-067.jpg",
    "alt": "Иллюстрация выражения «Собака на сене»",
    "phrases": [
      "Собака на сене"
    ],
    "phrase": "Собака на сене"
  },
  "Он работал не покладая рук": {
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
  "Намылить шею": {
    "src": "/presentation-assets/neck.jpg",
    "alt": "Иллюстрация выражения «Намылить шею»",
    "phrases": [
      "Намылить шею",
      "Ему намылили шею за опоздание"
    ],
    "phrase": "Намылить шею"
  },
  "Ему намылили шею за опоздание": {
    "src": "/presentation-assets/neck.jpg",
    "alt": "Иллюстрация выражения «Намылить шею»",
    "phrases": [
      "Намылить шею",
      "Ему намылили шею за опоздание"
    ],
    "phrase": "Намылить шею"
  },
  "Қол жуу": {
    "src": "/presentation-assets/illustration-072.jpg",
    "alt": "Иллюстрация выражения «Қол жуу»",
    "phrases": [
      "Қол жуу",
      "Қол жуу (переносное значение)"
    ],
    "phrase": "Қол жуу"
  },
  "Протянуть руку вперёд ↔ протянуть руку помощи": {
    "src": "/presentation-assets/illustration-029.jpg",
    "alt": "Иллюстрация выражения «Қол созу»",
    "phrases": [
      "Қол созу",
      "Протянуть руку помощи"
    ],
    "phrase": "Қол созу"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/hand.jpg",
    "alt": "Иллюстрация выражения «Протянуть руку вперёд»",
    "phrases": [
      "Протянуть руку вперёд"
    ],
    "phrase": "Протянуть руку вперёд"
  },
  {
    "src": "/presentation-assets/illustration-029.jpg",
    "alt": "Иллюстрация выражения «Қол созу»",
    "phrases": [
      "Қол созу",
      "Протянуть руку помощи"
    ],
    "phrase": "Қол созу"
  },
  {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
  },
  {
    "src": "/presentation-assets/illustration-065.jpg",
    "alt": "Иллюстрация выражения «Протянуть ноги»",
    "phrases": [
      "Протянуть ноги"
    ],
    "phrase": "Протянуть ноги"
  },
  {
    "src": "/presentation-assets/illustration-067.jpg",
    "alt": "Иллюстрация выражения «Собака на сене»",
    "phrases": [
      "Собака на сене"
    ],
    "phrase": "Собака на сене"
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
    "src": "/presentation-assets/illustration-072.jpg",
    "alt": "Иллюстрация выражения «Қол жуу»",
    "phrases": [
      "Қол жуу",
      "Қол жуу (переносное значение)"
    ],
    "phrase": "Қол жуу"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
