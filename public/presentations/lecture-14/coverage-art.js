// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Душа в пятки ушла": {
    "src": "/presentation-assets/illustration-111.jpg",
    "alt": "Иллюстрация выражения «Душа в пятки ушла»",
    "phrases": [
      "Душа в пятки ушла"
    ],
    "phrase": "Душа в пятки ушла"
  },
  "Душа нараспашку": {
    "src": "/presentation-assets/illustration-113.jpg",
    "alt": "Иллюстрация выражения «Душа нараспашку»",
    "phrases": [
      "Душа нараспашку"
    ],
    "phrase": "Душа нараспашку"
  },
  "Душа болит": {
    "src": "/presentation-assets/illustration-110.jpg",
    "alt": "Иллюстрация выражения «Душа болит»",
    "phrases": [
      "Душа болит"
    ],
    "phrase": "Душа болит"
  },
  "Тас жүрек": {
    "src": "/presentation-assets/illustration-116.jpg",
    "alt": "Иллюстрация выражения «Тас жүрек»",
    "phrases": [
      "Тас жүрек"
    ],
    "phrase": "Тас жүрек"
  },
  "Жүрек жұтқан": {
    "src": "/presentation-assets/illustration-117.jpg",
    "alt": "Иллюстрация выражения «Жүрек жұтқан»",
    "phrases": [
      "Жүрек жұтқан"
    ],
    "phrase": "Жүрек жұтқан"
  },
  "Удар судьбы": {
    "src": "/presentation-assets/illustration-118.jpg",
    "alt": "Иллюстрация выражения «Удар судьбы»",
    "phrases": [
      "Удар судьбы"
    ],
    "phrase": "Удар судьбы"
  },
  "Маңдайға жазу": {
    "src": "/presentation-assets/illustration-121.jpg",
    "alt": "Иллюстрация выражения «Маңдайға жазу»",
    "phrases": [
      "Маңдайға жазу"
    ],
    "phrase": "Маңдайға жазу"
  },
  "Тағдырдың жазуы": {
    "src": "/presentation-assets/fate-writing.jpg",
    "alt": "Иллюстрация выражения «Тағдырдың жазуы»",
    "phrases": [
      "Тағдырдың жазуы"
    ],
    "phrase": "Тағдырдың жазуы"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-111.jpg",
    "alt": "Иллюстрация выражения «Душа в пятки ушла»",
    "phrases": [
      "Душа в пятки ушла"
    ],
    "phrase": "Душа в пятки ушла"
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
    "src": "/presentation-assets/illustration-110.jpg",
    "alt": "Иллюстрация выражения «Душа болит»",
    "phrases": [
      "Душа болит"
    ],
    "phrase": "Душа болит"
  },
  {
    "src": "/presentation-assets/illustration-116.jpg",
    "alt": "Иллюстрация выражения «Тас жүрек»",
    "phrases": [
      "Тас жүрек"
    ],
    "phrase": "Тас жүрек"
  },
  {
    "src": "/presentation-assets/illustration-117.jpg",
    "alt": "Иллюстрация выражения «Жүрек жұтқан»",
    "phrases": [
      "Жүрек жұтқан"
    ],
    "phrase": "Жүрек жұтқан"
  },
  {
    "src": "/presentation-assets/illustration-118.jpg",
    "alt": "Иллюстрация выражения «Удар судьбы»",
    "phrases": [
      "Удар судьбы"
    ],
    "phrase": "Удар судьбы"
  },
  {
    "src": "/presentation-assets/illustration-121.jpg",
    "alt": "Иллюстрация выражения «Маңдайға жазу»",
    "phrases": [
      "Маңдайға жазу"
    ],
    "phrase": "Маңдайға жазу"
  },
  {
    "src": "/presentation-assets/fate-writing.jpg",
    "alt": "Иллюстрация выражения «Тағдырдың жазуы»",
    "phrases": [
      "Тағдырдың жазуы"
    ],
    "phrase": "Тағдырдың жазуы"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
