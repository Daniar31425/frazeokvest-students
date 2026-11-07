// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Брать себя в руки": {
    "src": "/presentation-assets/illustration-091.jpg",
    "alt": "Иллюстрация выражения «Брать себя в руки»",
    "phrases": [
      "Брать себя в руки"
    ],
    "phrase": "Брать себя в руки"
  },
  "Делать из мухи слона": {
    "src": "/presentation-assets/illustration-093.jpg",
    "alt": "Иллюстрация выражения «Делать из мухи слона»",
    "phrases": [
      "Делать из мухи слона"
    ],
    "phrase": "Делать из мухи слона"
  },
  "Ахиллесова пята": {
    "src": "/presentation-assets/illustration-092.jpg",
    "alt": "Иллюстрация выражения «Ахиллесова пята»",
    "phrases": [
      "Ахиллесова пята"
    ],
    "phrase": "Ахиллесова пята"
  },
  "Бить баклуши": {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
  },
  "Будешь бить баклуши": {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
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
    "src": "/presentation-assets/illustration-095.jpg",
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
  "Мухи не обидит": {
    "src": "/presentation-assets/illustration-106.jpg",
    "alt": "Иллюстрация выражения «Мухи не обидит»",
    "phrases": [
      "Мухи не обидит"
    ],
    "phrase": "Мухи не обидит"
  },
  "Қой аузынан шөп алмас": {
    "src": "/presentation-assets/illustration-144.jpg",
    "alt": "Иллюстрация выражения «Қой аузынан шөп алмас»",
    "phrases": [
      "Қой аузынан шөп алмас"
    ],
    "phrase": "Қой аузынан шөп алмас"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-091.jpg",
    "alt": "Иллюстрация выражения «Брать себя в руки»",
    "phrases": [
      "Брать себя в руки"
    ],
    "phrase": "Брать себя в руки"
  },
  {
    "src": "/presentation-assets/illustration-093.jpg",
    "alt": "Иллюстрация выражения «Делать из мухи слона»",
    "phrases": [
      "Делать из мухи слона"
    ],
    "phrase": "Делать из мухи слона"
  },
  {
    "src": "/presentation-assets/illustration-092.jpg",
    "alt": "Иллюстрация выражения «Ахиллесова пята»",
    "phrases": [
      "Ахиллесова пята"
    ],
    "phrase": "Ахиллесова пята"
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
    "src": "/presentation-assets/illustration-103.jpg",
    "alt": "Иллюстрация выражения «Беречь как зеницу ока»",
    "phrases": [
      "Беречь как зеницу ока"
    ],
    "phrase": "Беречь как зеницу ока"
  },
  {
    "src": "/presentation-assets/illustration-095.jpg",
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
    "src": "/presentation-assets/illustration-106.jpg",
    "alt": "Иллюстрация выражения «Мухи не обидит»",
    "phrases": [
      "Мухи не обидит"
    ],
    "phrase": "Мухи не обидит"
  },
  {
    "src": "/presentation-assets/illustration-144.jpg",
    "alt": "Иллюстрация выражения «Қой аузынан шөп алмас»",
    "phrases": [
      "Қой аузынан шөп алмас"
    ],
    "phrase": "Қой аузынан шөп алмас"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();

window.LECTURE_IMAGE_MAP['Теория и практика составления словарей'] = {
 src: '/presentation-assets/phraseological-dictionary.png',
 alt: 'Фразеологический словарь русского языка под редакцией А. И. Молоткова'
};
