// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Мухи не обидит": {
    "src": "/presentation-assets/illustration-106.jpg",
    "alt": "Иллюстрация выражения «Мухи не обидит»",
    "phrases": [
      "Мухи не обидит"
    ],
    "phrase": "Мухи не обидит"
  },
  "Беречь как зеницу ока": {
    "src": "/presentation-assets/illustration-103.jpg",
    "alt": "Иллюстрация выражения «Беречь как зеницу ока»",
    "phrases": [
      "Беречь как зеницу ока"
    ],
    "phrase": "Беречь как зеницу ока"
  },
  "Көздің қарашығындай сақтау": {
    "src": "/presentation-assets/protect-loved-one.jpg",
    "alt": "Иллюстрация выражения «Көздің қарашығындай сақтау»",
    "phrases": [
      "Көздің қарашығындай сақтау"
    ],
    "phrase": "Көздің қарашығындай сақтау"
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
  "Қой аузынан шөп алмас": {
    "src": "/presentation-assets/illustration-144.jpg",
    "alt": "Иллюстрация выражения «Қой аузынан шөп алмас»",
    "phrases": [
      "Қой аузынан шөп алмас"
    ],
    "phrase": "Қой аузынан шөп алмас"
  },
  "Когда рак на горе свистнет": {
    "src": "/presentation-assets/crayfish-whistling.jpg",
    "alt": "Иллюстрация выражения «Когда рак на горе свистнет»",
    "phrases": [
      "Когда рак на горе свистнет"
    ],
    "phrase": "Когда рак на горе свистнет"
  },
  "Түйенің құйрығы жерге тигенде": {
    "src": "/presentation-assets/illustration-101.jpg",
    "alt": "Иллюстрация выражения «Түйенің құйрығы жерге тигенде»",
    "phrases": [
      "Түйенің құйрығы жерге тигенде"
    ],
    "phrase": "Түйенің құйрығы жерге тигенде"
  },
  "Тайға таңба басқандай": {
    "src": "/presentation-assets/illustration-146.jpg",
    "alt": "Иллюстрация выражения «Тайға таңба басқандай»",
    "phrases": [
      "Тайға таңба басқандай"
    ],
    "phrase": "Тайға таңба басқандай"
  },
  "Ақтабан шұбырынды": {
    "src": "/presentation-assets/illustration-108.jpg",
    "alt": "Иллюстрация выражения «Ақтабан шұбырынды»",
    "phrases": [
      "Ақтабан шұбырынды"
    ],
    "phrase": "Ақтабан шұбырынды"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-106.jpg",
    "alt": "Иллюстрация выражения «Мухи не обидит»",
    "phrases": [
      "Мухи не обидит"
    ],
    "phrase": "Мухи не обидит"
  },
  {
    "src": "/presentation-assets/illustration-103.jpg",
    "alt": "Иллюстрация выражения «Беречь как зеницу ока»",
    "phrases": [
      "Беречь как зеницу ока"
    ],
    "phrase": "Беречь как зеницу ока"
  },
  {
    "src": "/presentation-assets/protect-loved-one.jpg",
    "alt": "Иллюстрация выражения «Көздің қарашығындай сақтау»",
    "phrases": [
      "Көздің қарашығындай сақтау"
    ],
    "phrase": "Көздің қарашығындай сақтау"
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
    "src": "/presentation-assets/illustration-144.jpg",
    "alt": "Иллюстрация выражения «Қой аузынан шөп алмас»",
    "phrases": [
      "Қой аузынан шөп алмас"
    ],
    "phrase": "Қой аузынан шөп алмас"
  },
  {
    "src": "/presentation-assets/crayfish-whistling.jpg",
    "alt": "Иллюстрация выражения «Когда рак на горе свистнет»",
    "phrases": [
      "Когда рак на горе свистнет"
    ],
    "phrase": "Когда рак на горе свистнет"
  },
  {
    "src": "/presentation-assets/illustration-101.jpg",
    "alt": "Иллюстрация выражения «Түйенің құйрығы жерге тигенде»",
    "phrases": [
      "Түйенің құйрығы жерге тигенде"
    ],
    "phrase": "Түйенің құйрығы жерге тигенде"
  },
  {
    "src": "/presentation-assets/illustration-146.jpg",
    "alt": "Иллюстрация выражения «Тайға таңба басқандай»",
    "phrases": [
      "Тайға таңба басқандай"
    ],
    "phrase": "Тайға таңба басқандай"
  },
  {
    "src": "/presentation-assets/illustration-108.jpg",
    "alt": "Иллюстрация выражения «Ақтабан шұбырынды»",
    "phrases": [
      "Ақтабан шұбырынды"
    ],
    "phrase": "Ақтабан шұбырынды"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
