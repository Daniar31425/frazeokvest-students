// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Ахиллесова пята": {
    "src": "/presentation-assets/illustration-092.jpg",
    "alt": "Иллюстрация выражения «Ахиллесова пята»",
    "phrases": [
      "Ахиллесова пята"
    ],
    "phrase": "Ахиллесова пята"
  },
  "Брать себя в руки": {
    "src": "/presentation-assets/illustration-091.jpg",
    "alt": "Иллюстрация выражения «Брать себя в руки»",
    "phrases": [
      "Брать себя в руки"
    ],
    "phrase": "Брать себя в руки"
  },
  "Сломя голову": {
    "src": "/presentation-assets/illustration-010.jpg",
    "alt": "Иллюстрация выражения «Сломя голову»",
    "phrases": [
      "Сломя голову",
      "Бежать сломя голову"
    ],
    "phrase": "Сломя голову"
  },
  "Не робкого десятка": {
    "src": "/presentation-assets/brave.jpg",
    "alt": "Иллюстрация выражения «Не робкого десятка»",
    "phrases": [
      "Не робкого десятка"
    ],
    "phrase": "Не робкого десятка"
  },
  "Руки не доходят": {
    "src": "/presentation-assets/hands-not-reached.jpg",
    "alt": "Иллюстрация выражения «Руки не доходят»",
    "phrases": [
      "Руки не доходят"
    ],
    "phrase": "Руки не доходят"
  },
  "Бить баклуши": {
    "src": "/presentation-assets/illustration-134.jpg",
    "alt": "Иллюстрация выражения «Бить баклуши»",
    "phrases": [
      "Бить баклуши"
    ],
    "phrase": "Бить баклуши"
  },
  "Закадычный друг": {
    "src": "/presentation-assets/illustration-042.jpg",
    "alt": "Иллюстрация выражения «Закадычный друг»",
    "phrases": [
      "Закадычный друг"
    ],
    "phrase": "Закадычный друг"
  },
  "Ломать голову": {
    "src": "/presentation-assets/head.jpg",
    "alt": "Иллюстрация выражения «Ломать голову»",
    "phrases": [
      "Ломать голову",
      "Бас қатыру"
    ],
    "phrase": "Ломать голову"
  },
  "Бас қатыру": {
    "src": "/presentation-assets/head.jpg",
    "alt": "Иллюстрация выражения «Ломать голову»",
    "phrases": [
      "Ломать голову",
      "Бас қатыру"
    ],
    "phrase": "Ломать голову"
  },
  "Золотые руки": {
    "src": "/presentation-assets/illustration-084.jpg",
    "alt": "Иллюстрация выражения «Золотые руки»",
    "phrases": [
      "Золотые руки"
    ],
    "phrase": "Золотые руки"
  },
  "Работать не покладая рук": {
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
  "Умывать руки": {
    "src": "/presentation-assets/illustration-058.jpg",
    "alt": "Иллюстрация выражения «Умывать руки»",
    "phrases": [
      "Умывать руки"
    ],
    "phrase": "Умывать руки"
  },
  "Пускать пыль в глаза": {
    "src": "/presentation-assets/dust.jpg",
    "alt": "Иллюстрация выражения «Пускать пыль в глаза»",
    "phrases": [
      "Пускать пыль в глаза"
    ],
    "phrase": "Пускать пыль в глаза"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-092.jpg",
    "alt": "Иллюстрация выражения «Ахиллесова пята»",
    "phrases": [
      "Ахиллесова пята"
    ],
    "phrase": "Ахиллесова пята"
  },
  {
    "src": "/presentation-assets/illustration-091.jpg",
    "alt": "Иллюстрация выражения «Брать себя в руки»",
    "phrases": [
      "Брать себя в руки"
    ],
    "phrase": "Брать себя в руки"
  },
  {
    "src": "/presentation-assets/illustration-010.jpg",
    "alt": "Иллюстрация выражения «Сломя голову»",
    "phrases": [
      "Сломя голову",
      "Бежать сломя голову"
    ],
    "phrase": "Сломя голову"
  },
  {
    "src": "/presentation-assets/brave.jpg",
    "alt": "Иллюстрация выражения «Не робкого десятка»",
    "phrases": [
      "Не робкого десятка"
    ],
    "phrase": "Не робкого десятка"
  },
  {
    "src": "/presentation-assets/hands-not-reached.jpg",
    "alt": "Иллюстрация выражения «Руки не доходят»",
    "phrases": [
      "Руки не доходят"
    ],
    "phrase": "Руки не доходят"
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
    "src": "/presentation-assets/illustration-042.jpg",
    "alt": "Иллюстрация выражения «Закадычный друг»",
    "phrases": [
      "Закадычный друг"
    ],
    "phrase": "Закадычный друг"
  },
  {
    "src": "/presentation-assets/head.jpg",
    "alt": "Иллюстрация выражения «Ломать голову»",
    "phrases": [
      "Ломать голову",
      "Бас қатыру"
    ],
    "phrase": "Ломать голову"
  },
  {
    "src": "/presentation-assets/illustration-084.jpg",
    "alt": "Иллюстрация выражения «Золотые руки»",
    "phrases": [
      "Золотые руки"
    ],
    "phrase": "Золотые руки"
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
    "src": "/presentation-assets/illustration-058.jpg",
    "alt": "Иллюстрация выражения «Умывать руки»",
    "phrases": [
      "Умывать руки"
    ],
    "phrase": "Умывать руки"
  },
  {
    "src": "/presentation-assets/dust.jpg",
    "alt": "Иллюстрация выражения «Пускать пыль в глаза»",
    "phrases": [
      "Пускать пыль в глаза"
    ],
    "phrase": "Пускать пыль в глаза"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
