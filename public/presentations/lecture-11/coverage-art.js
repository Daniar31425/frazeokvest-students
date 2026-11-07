// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Засучив рукава": {
    "src": "/presentation-assets/spirit.jpg",
    "alt": "Иллюстрация выражения «Засучив рукава»",
    "phrases": [
      "Засучив рукава"
    ],
    "phrase": "Засучив рукава"
  },
  "Спустя рукава": {
    "src": "/presentation-assets/spustya.jpg",
    "alt": "Иллюстрация выражения «Спустя рукава»",
    "phrases": [
      "Спустя рукава",
      "Он работал спустя рукава"
    ],
    "phrase": "Спустя рукава"
  },
  "Душа нараспашку": {
    "src": "/presentation-assets/illustration-113.jpg",
    "alt": "Иллюстрация выражения «Душа нараспашку»",
    "phrases": [
      "Душа нараспашку"
    ],
    "phrase": "Душа нараспашку"
  },
  "Жить душа в душу": {
    "src": "/presentation-assets/chat.jpg",
    "alt": "Иллюстрация выражения «Жить душа в душу»",
    "phrases": [
      "Жить душа в душу"
    ],
    "phrase": "Жить душа в душу"
  },
  "Ат үстінен қарау": {
    "src": "/presentation-assets/illustration-142.jpg",
    "alt": "Иллюстрация выражения «Ат үстінен қарау»",
    "phrases": [
      "Ат үстінен қарау"
    ],
    "phrase": "Ат үстінен қарау"
  },
  "Тайға таңба басқандай": {
    "src": "/presentation-assets/illustration-146.jpg",
    "alt": "Иллюстрация выражения «Тайға таңба басқандай»",
    "phrases": [
      "Тайға таңба басқандай"
    ],
    "phrase": "Тайға таңба басқандай"
  },
  "Золотые руки": {
    "src": "/presentation-assets/illustration-084.jpg",
    "alt": "Иллюстрация выражения «Золотые руки»",
    "phrases": [
      "Золотые руки"
    ],
    "phrase": "Золотые руки"
  },
  "Светлая голова": {
    "src": "/presentation-assets/illustration-124.jpg",
    "alt": "Иллюстрация выражения «Светлая голова»",
    "phrases": [
      "Светлая голова"
    ],
    "phrase": "Светлая голова"
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
  },
  "Заварить кашу": {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/spirit.jpg",
    "alt": "Иллюстрация выражения «Засучив рукава»",
    "phrases": [
      "Засучив рукава"
    ],
    "phrase": "Засучив рукава"
  },
  {
    "src": "/presentation-assets/spustya.jpg",
    "alt": "Иллюстрация выражения «Спустя рукава»",
    "phrases": [
      "Спустя рукава",
      "Он работал спустя рукава"
    ],
    "phrase": "Спустя рукава"
  },
  {
    "src": "/presentation-assets/illustration-113.jpg",
    "alt": "Иллюстрация выражения «Душа нараспашку»",
    "phrases": [
      "Душа нараспашку"
    ],
    "phrase": "Душа нараспашку"
  },
  {
    "src": "/presentation-assets/chat.jpg",
    "alt": "Иллюстрация выражения «Жить душа в душу»",
    "phrases": [
      "Жить душа в душу"
    ],
    "phrase": "Жить душа в душу"
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
    "src": "/presentation-assets/illustration-146.jpg",
    "alt": "Иллюстрация выражения «Тайға таңба басқандай»",
    "phrases": [
      "Тайға таңба басқандай"
    ],
    "phrase": "Тайға таңба басқандай"
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
    "src": "/presentation-assets/illustration-124.jpg",
    "alt": "Иллюстрация выражения «Светлая голова»",
    "phrases": [
      "Светлая голова"
    ],
    "phrase": "Светлая голова"
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
  },
  {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
