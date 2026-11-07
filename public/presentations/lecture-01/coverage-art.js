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
  "Собаку съесть": {
    "src": "/presentation-assets/illustration-040.jpg",
    "alt": "Иллюстрация выражения «Собаку съесть»",
    "phrases": [
      "Собаку съесть",
      "Съесть собаку"
    ],
    "phrase": "Собаку съесть"
  },
  "Быть на седьмом небе": {
    "src": "/presentation-assets/illustration-104.jpg",
    "alt": "Иллюстрация выражения «Быть на седьмом небе»",
    "phrases": [
      "Быть на седьмом небе"
    ],
    "phrase": "Быть на седьмом небе"
  },
  "Төбесі көкке жету": {
    "src": "/presentation-assets/illustration-097.jpg",
    "alt": "Иллюстрация выражения «Төбесі көкке жету»",
    "phrases": [
      "Төбесі көкке жету",
      "Төбесі көкке жетті",
      "Төбесі көкке"
    ],
    "phrase": "Төбесі көкке жету"
  },
  "Заварить кашу": {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
  },
  "Плыть по течению": {
    "src": "/presentation-assets/illustration-041.jpg",
    "alt": "Иллюстрация выражения «Плыть по течению»",
    "phrases": [
      "Плыть по течению"
    ],
    "phrase": "Плыть по течению"
  },
  "Ат үстінен қарау": {
    "src": "/presentation-assets/illustration-142.jpg",
    "alt": "Иллюстрация выражения «Ат үстінен қарау»",
    "phrases": [
      "Ат үстінен қарау"
    ],
    "phrase": "Ат үстінен қарау"
  },
  "Ит арқасы қиянда": {
    "src": "/presentation-assets/illustration-129.jpg",
    "alt": "Иллюстрация выражения «Ит арқасы қиянда»",
    "phrases": [
      "Ит арқасы қиянда"
    ],
    "phrase": "Ит арқасы қиянда"
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
    "src": "/presentation-assets/illustration-040.jpg",
    "alt": "Иллюстрация выражения «Собаку съесть»",
    "phrases": [
      "Собаку съесть",
      "Съесть собаку"
    ],
    "phrase": "Собаку съесть"
  },
  {
    "src": "/presentation-assets/illustration-104.jpg",
    "alt": "Иллюстрация выражения «Быть на седьмом небе»",
    "phrases": [
      "Быть на седьмом небе"
    ],
    "phrase": "Быть на седьмом небе"
  },
  {
    "src": "/presentation-assets/illustration-097.jpg",
    "alt": "Иллюстрация выражения «Төбесі көкке жету»",
    "phrases": [
      "Төбесі көкке жету",
      "Төбесі көкке жетті",
      "Төбесі көкке"
    ],
    "phrase": "Төбесі көкке жету"
  },
  {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
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
    "src": "/presentation-assets/illustration-142.jpg",
    "alt": "Иллюстрация выражения «Ат үстінен қарау»",
    "phrases": [
      "Ат үстінен қарау"
    ],
    "phrase": "Ат үстінен қарау"
  },
  {
    "src": "/presentation-assets/illustration-129.jpg",
    "alt": "Иллюстрация выражения «Ит арқасы қиянда»",
    "phrases": [
      "Ит арқасы қиянда"
    ],
    "phrase": "Ит арқасы қиянда"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
