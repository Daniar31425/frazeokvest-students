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
  "Спустя рукава": {
    "src": "/presentation-assets/spustya.jpg",
    "alt": "Иллюстрация выражения «Спустя рукава»",
    "phrases": [
      "Спустя рукава",
      "Он работал спустя рукава"
    ],
    "phrase": "Спустя рукава"
  },
  "Семи пядей во лбу": {
    "src": "/presentation-assets/illustration-052.jpg",
    "alt": "Иллюстрация выражения «Семи пядей во лбу»",
    "phrases": [
      "Семи пядей во лбу"
    ],
    "phrase": "Семи пядей во лбу"
  },
  "Затаив дыхание": {
    "src": "/presentation-assets/illustration-050.jpg",
    "alt": "Иллюстрация выражения «Затаив дыхание»",
    "phrases": [
      "Затаив дыхание"
    ],
    "phrase": "Затаив дыхание"
  },
  "Медведь на ухо наступил": {
    "src": "/presentation-assets/illustration-054.jpg",
    "alt": "Иллюстрация выражения «Медведь на ухо наступил»",
    "phrases": [
      "Медведь на ухо наступил"
    ],
    "phrase": "Медведь на ухо наступил"
  },
  "Он работал спустя рукава": {
    "src": "/presentation-assets/spustya.jpg",
    "alt": "Иллюстрация выражения «Спустя рукава»",
    "phrases": [
      "Спустя рукава",
      "Он работал спустя рукава"
    ],
    "phrase": "Спустя рукава"
  },
  "Как кот наплакал": {
    "src": "/presentation-assets/illustration-073.jpg",
    "alt": "Иллюстрация выражения «Как кот наплакал»",
    "phrases": [
      "Как кот наплакал"
    ],
    "phrase": "Как кот наплакал"
  },
  "Умывать руки": {
    "src": "/presentation-assets/illustration-058.jpg",
    "alt": "Иллюстрация выражения «Умывать руки»",
    "phrases": [
      "Умывать руки"
    ],
    "phrase": "Умывать руки"
  },
  "Золотое сердце": {
    "src": "/presentation-assets/illustration-060.jpg",
    "alt": "Иллюстрация выражения «Золотое сердце»",
    "phrases": [
      "Золотое сердце"
    ],
    "phrase": "Золотое сердце"
  },
  "Без царя в голове": {
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
  },
  "Бежать со всех ног": {
    "src": "/presentation-assets/illustration-011.jpg",
    "alt": "Иллюстрация выражения «Со всех ног»",
    "phrases": [
      "Со всех ног",
      "Бежать со всех ног"
    ],
    "phrase": "Со всех ног"
  },
  "Бежать сломя голову": {
    "src": "/presentation-assets/illustration-010.jpg",
    "alt": "Иллюстрация выражения «Сломя голову»",
    "phrases": [
      "Сломя голову",
      "Бежать сломя голову"
    ],
    "phrase": "Сломя голову"
  },
  "Көзін бояу": {
    "src": "/presentation-assets/kz-deceive.jpg",
    "alt": "Иллюстрация выражения «Көзін бояу»",
    "phrases": [
      "Көзін бояу"
    ],
    "phrase": "Көзін бояу"
  },
  "Задать дёру": {
    "src": "/presentation-assets/illustration-013.jpg",
    "alt": "Иллюстрация выражения «Задать дёру»",
    "phrases": [
      "Задать дёру"
    ],
    "phrase": "Задать дёру"
  },
  "Табанын жалтырату": {
    "src": "/presentation-assets/illustration-012.jpg",
    "alt": "Иллюстрация выражения «Только пятки сверкают»",
    "phrases": [
      "Только пятки сверкают",
      "Сверкать пятками",
      "Табанын жалтырату"
    ],
    "phrase": "Только пятки сверкают"
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
    "src": "/presentation-assets/spustya.jpg",
    "alt": "Иллюстрация выражения «Спустя рукава»",
    "phrases": [
      "Спустя рукава",
      "Он работал спустя рукава"
    ],
    "phrase": "Спустя рукава"
  },
  {
    "src": "/presentation-assets/illustration-052.jpg",
    "alt": "Иллюстрация выражения «Семи пядей во лбу»",
    "phrases": [
      "Семи пядей во лбу"
    ],
    "phrase": "Семи пядей во лбу"
  },
  {
    "src": "/presentation-assets/illustration-050.jpg",
    "alt": "Иллюстрация выражения «Затаив дыхание»",
    "phrases": [
      "Затаив дыхание"
    ],
    "phrase": "Затаив дыхание"
  },
  {
    "src": "/presentation-assets/illustration-054.jpg",
    "alt": "Иллюстрация выражения «Медведь на ухо наступил»",
    "phrases": [
      "Медведь на ухо наступил"
    ],
    "phrase": "Медведь на ухо наступил"
  },
  {
    "src": "/presentation-assets/illustration-073.jpg",
    "alt": "Иллюстрация выражения «Как кот наплакал»",
    "phrases": [
      "Как кот наплакал"
    ],
    "phrase": "Как кот наплакал"
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
    "src": "/presentation-assets/illustration-060.jpg",
    "alt": "Иллюстрация выражения «Золотое сердце»",
    "phrases": [
      "Золотое сердце"
    ],
    "phrase": "Золотое сердце"
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
    "src": "/presentation-assets/illustration-011.jpg",
    "alt": "Иллюстрация выражения «Со всех ног»",
    "phrases": [
      "Со всех ног",
      "Бежать со всех ног"
    ],
    "phrase": "Со всех ног"
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
    "src": "/presentation-assets/kz-deceive.jpg",
    "alt": "Иллюстрация выражения «Көзін бояу»",
    "phrases": [
      "Көзін бояу"
    ],
    "phrase": "Көзін бояу"
  },
  {
    "src": "/presentation-assets/illustration-013.jpg",
    "alt": "Иллюстрация выражения «Задать дёру»",
    "phrases": [
      "Задать дёру"
    ],
    "phrase": "Задать дёру"
  },
  {
    "src": "/presentation-assets/illustration-012.jpg",
    "alt": "Иллюстрация выражения «Только пятки сверкают»",
    "phrases": [
      "Только пятки сверкают",
      "Сверкать пятками",
      "Табанын жалтырату"
    ],
    "phrase": "Только пятки сверкают"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
