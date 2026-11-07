// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Золотые руки": {
    "src": "/presentation-assets/illustration-084.jpg",
    "alt": "Иллюстрация выражения «Золотые руки»",
    "phrases": [
      "Золотые руки"
    ],
    "phrase": "Золотые руки"
  },
  "Как кот наплакал": {
    "src": "/presentation-assets/illustration-073.jpg",
    "alt": "Иллюстрация выражения «Как кот наплакал»",
    "phrases": [
      "Как кот наплакал"
    ],
    "phrase": "Как кот наплакал"
  },
  "По пальцам пересчитать": {
    "src": "/presentation-assets/illustration-074.jpg",
    "alt": "Иллюстрация выражения «По пальцам пересчитать»",
    "phrases": [
      "По пальцам пересчитать"
    ],
    "phrase": "По пальцам пересчитать"
  },
  "Сложить голову": {
    "src": "/presentation-assets/illustration-076.jpg",
    "alt": "Иллюстрация выражения «Сложить голову»",
    "phrases": [
      "Сложить голову"
    ],
    "phrase": "Сложить голову"
  },
  "Пасть смертью храбрых": {
    "src": "/presentation-assets/illustration-077.jpg",
    "alt": "Иллюстрация выражения «Пасть смертью храбрых»",
    "phrases": [
      "Пасть смертью храбрых"
    ],
    "phrase": "Пасть смертью храбрых"
  },
  "Сыграть в ящик": {
    "src": "/presentation-assets/illustration-078.jpg",
    "alt": "Иллюстрация выражения «Сыграть в ящик»",
    "phrases": [
      "Сыграть в ящик"
    ],
    "phrase": "Сыграть в ящик"
  },
  "Отдать концы": {
    "src": "/presentation-assets/illustration-079.jpg",
    "alt": "Иллюстрация выражения «Отдать концы»",
    "phrases": [
      "Отдать концы"
    ],
    "phrase": "Отдать концы"
  },
  "О дүниеге аттану": {
    "src": "/presentation-assets/illustration-080.jpg",
    "alt": "Иллюстрация выражения «О дүниеге аттану»",
    "phrases": [
      "О дүниеге аттану"
    ],
    "phrase": "О дүниеге аттану"
  },
  "Бақилық болу": {
    "src": "/presentation-assets/illustration-081.jpg",
    "alt": "Иллюстрация выражения «Бақилық болу»",
    "phrases": [
      "Бақилық болу"
    ],
    "phrase": "Бақилық болу"
  },
  "Светлая голова": {
    "src": "/presentation-assets/illustration-124.jpg",
    "alt": "Иллюстрация выражения «Светлая голова»",
    "phrases": [
      "Светлая голова"
    ],
    "phrase": "Светлая голова"
  },
  "Без царя в голове": {
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
  },
  "Ақ көңіл": {
    "src": "/presentation-assets/illustration-086.jpg",
    "alt": "Иллюстрация выражения «Ақ көңіл»",
    "phrases": [
      "Ақ көңіл"
    ],
    "phrase": "Ақ көңіл"
  },
  "Қара жүрек": {
    "src": "/presentation-assets/illustration-089.jpg",
    "alt": "Иллюстрация выражения «Қара жүрек»",
    "phrases": [
      "Қара жүрек"
    ],
    "phrase": "Қара жүрек"
  },
  "Светлая голова ≠ ақ көңіл": {
    "src": "/presentation-assets/illustration-124.jpg",
    "alt": "Иллюстрация выражения «Светлая голова»",
    "phrases": [
      "Светлая голова"
    ],
    "phrase": "Светлая голова"
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
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-084.jpg",
    "alt": "Иллюстрация выражения «Золотые руки»",
    "phrases": [
      "Золотые руки"
    ],
    "phrase": "Золотые руки"
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
    "src": "/presentation-assets/illustration-074.jpg",
    "alt": "Иллюстрация выражения «По пальцам пересчитать»",
    "phrases": [
      "По пальцам пересчитать"
    ],
    "phrase": "По пальцам пересчитать"
  },
  {
    "src": "/presentation-assets/illustration-076.jpg",
    "alt": "Иллюстрация выражения «Сложить голову»",
    "phrases": [
      "Сложить голову"
    ],
    "phrase": "Сложить голову"
  },
  {
    "src": "/presentation-assets/illustration-077.jpg",
    "alt": "Иллюстрация выражения «Пасть смертью храбрых»",
    "phrases": [
      "Пасть смертью храбрых"
    ],
    "phrase": "Пасть смертью храбрых"
  },
  {
    "src": "/presentation-assets/illustration-078.jpg",
    "alt": "Иллюстрация выражения «Сыграть в ящик»",
    "phrases": [
      "Сыграть в ящик"
    ],
    "phrase": "Сыграть в ящик"
  },
  {
    "src": "/presentation-assets/illustration-079.jpg",
    "alt": "Иллюстрация выражения «Отдать концы»",
    "phrases": [
      "Отдать концы"
    ],
    "phrase": "Отдать концы"
  },
  {
    "src": "/presentation-assets/illustration-080.jpg",
    "alt": "Иллюстрация выражения «О дүниеге аттану»",
    "phrases": [
      "О дүниеге аттану"
    ],
    "phrase": "О дүниеге аттану"
  },
  {
    "src": "/presentation-assets/illustration-081.jpg",
    "alt": "Иллюстрация выражения «Бақилық болу»",
    "phrases": [
      "Бақилық болу"
    ],
    "phrase": "Бақилық болу"
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
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
  },
  {
    "src": "/presentation-assets/illustration-086.jpg",
    "alt": "Иллюстрация выражения «Ақ көңіл»",
    "phrases": [
      "Ақ көңіл"
    ],
    "phrase": "Ақ көңіл"
  },
  {
    "src": "/presentation-assets/illustration-089.jpg",
    "alt": "Иллюстрация выражения «Қара жүрек»",
    "phrases": [
      "Қара жүрек"
    ],
    "phrase": "Қара жүрек"
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
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
