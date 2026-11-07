// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Хоть пруд пруди": {
    "src": "/presentation-assets/illustration-001.jpg",
    "alt": "Иллюстрация выражения «Хоть пруд пруди»",
    "phrases": [
      "Хоть пруд пруди"
    ],
    "phrase": "Хоть пруд пруди"
  },
  "Куры не клюют": {
    "src": "/presentation-assets/illustration-002.jpg",
    "alt": "Иллюстрация выражения «Куры не клюют»",
    "phrases": [
      "Куры не клюют"
    ],
    "phrase": "Куры не клюют"
  },
  "Вагон и маленькая тележка": {
    "src": "/presentation-assets/illustration-004.jpg",
    "alt": "Иллюстрация выражения «Вагон и маленькая тележка»",
    "phrases": [
      "Вагон и маленькая тележка"
    ],
    "phrase": "Вагон и маленькая тележка"
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
  "Со всех ног": {
    "src": "/presentation-assets/illustration-011.jpg",
    "alt": "Иллюстрация выражения «Со всех ног»",
    "phrases": [
      "Со всех ног",
      "Бежать со всех ног"
    ],
    "phrase": "Со всех ног"
  },
  "Только пятки сверкают": {
    "src": "/presentation-assets/illustration-012.jpg",
    "alt": "Иллюстрация выражения «Только пятки сверкают»",
    "phrases": [
      "Только пятки сверкают",
      "Сверкать пятками",
      "Табанын жалтырату"
    ],
    "phrase": "Только пятки сверкают"
  },
  "Задать дёру": {
    "src": "/presentation-assets/illustration-013.jpg",
    "alt": "Иллюстрация выражения «Задать дёру»",
    "phrases": [
      "Задать дёру"
    ],
    "phrase": "Задать дёру"
  },
  "Көл-көсір": {
    "src": "/presentation-assets/illustration-006.jpg",
    "alt": "Иллюстрация выражения «Көл-көсір»",
    "phrases": [
      "Көл-көсір"
    ],
    "phrase": "Көл-көсір"
  },
  "Ұшан-теңіз": {
    "src": "/presentation-assets/illustration-007.jpg",
    "alt": "Иллюстрация выражения «Ұшан-теңіз»",
    "phrases": [
      "Ұшан-теңіз"
    ],
    "phrase": "Ұшан-теңіз"
  },
  "Көзді ашып-жұмғанша": {
    "src": "/presentation-assets/illustration-051.jpg",
    "alt": "Иллюстрация выражения «Көзді ашып-жұмғанша»",
    "phrases": [
      "Көзді ашып-жұмғанша"
    ],
    "phrase": "Көзді ашып-жұмғанша"
  },
  "Қас қаққанша": {
    "src": "/presentation-assets/illustration-014.jpg",
    "alt": "Иллюстрация выражения «Қас қаққанша»",
    "phrases": [
      "Қас қаққанша"
    ],
    "phrase": "Қас қаққанша"
  },
  "Сүт пісірім уақыт": {
    "src": "/presentation-assets/illustration-015.jpg",
    "alt": "Иллюстрация выражения «Сүт пісірім уақытта»",
    "phrases": [
      "Сүт пісірім уақытта",
      "Сүт пісірім уақыт"
    ],
    "phrase": "Сүт пісірім уақытта"
  },
  "С тяжёлым сердцем": {
    "src": "/presentation-assets/illustration-019.jpg",
    "alt": "Иллюстрация выражения «С тяжёлым сердцем»",
    "phrases": [
      "С тяжёлым сердцем"
    ],
    "phrase": "С тяжёлым сердцем"
  },
  "↔ С лёгким сердцем": {
    "src": "/presentation-assets/illustration-020.jpg",
    "alt": "Иллюстрация выражения «С лёгким сердцем»",
    "phrases": [
      "С лёгким сердцем"
    ],
    "phrase": "С лёгким сердцем"
  },
  "С лёгким сердцем": {
    "src": "/presentation-assets/illustration-020.jpg",
    "alt": "Иллюстрация выражения «С лёгким сердцем»",
    "phrases": [
      "С лёгким сердцем"
    ],
    "phrase": "С лёгким сердцем"
  },
  "Быть на коне": {
    "src": "/presentation-assets/illustration-017.jpg",
    "alt": "Иллюстрация выражения «Быть на коне»",
    "phrases": [
      "Быть на коне"
    ],
    "phrase": "Быть на коне"
  },
  "У разбитого корыта": {
    "src": "/presentation-assets/illustration-018.jpg",
    "alt": "Иллюстрация выражения «У разбитого корыта»",
    "phrases": [
      "У разбитого корыта",
      "Оказаться у разбитого корыта"
    ],
    "phrase": "У разбитого корыта"
  },
  "Жұлдызы жанды": {
    "src": "/presentation-assets/illustration-025.jpg",
    "alt": "Иллюстрация выражения «Жұлдызы жанды»",
    "phrases": [
      "Жұлдызы жанды"
    ],
    "phrase": "Жұлдызы жанды"
  },
  "↔ Жұлдызы сөнді": {
    "src": "/presentation-assets/illustration-026.jpg",
    "alt": "Иллюстрация выражения «Жұлдызы сөнді»",
    "phrases": [
      "Жұлдызы сөнді"
    ],
    "phrase": "Жұлдызы сөнді"
  },
  "Семи пядей во лбу": {
    "src": "/presentation-assets/illustration-052.jpg",
    "alt": "Иллюстрация выражения «Семи пядей во лбу»",
    "phrases": [
      "Семи пядей во лбу"
    ],
    "phrase": "Семи пядей во лбу"
  },
  "Без царя в голове": {
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
  },
  "Заварить кашу": {
    "src": "/presentation-assets/illustration-131.jpg",
    "alt": "Иллюстрация выражения «Заварить кашу»",
    "phrases": [
      "Заварить кашу"
    ],
    "phrase": "Заварить кашу"
  },
  "Расхлёбывать кашу": {
    "src": "/presentation-assets/illustration-022.jpg",
    "alt": "Иллюстрация выражения «Расхлёбывать кашу»",
    "phrases": [
      "Расхлёбывать кашу"
    ],
    "phrase": "Расхлёбывать кашу"
  },
  "Брать себя в руки": {
    "src": "/presentation-assets/illustration-091.jpg",
    "alt": "Иллюстрация выражения «Брать себя в руки»",
    "phrases": [
      "Брать себя в руки"
    ],
    "phrase": "Брать себя в руки"
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
  "Төбесі көкке жетті": {
    "src": "/presentation-assets/illustration-097.jpg",
    "alt": "Иллюстрация выражения «Төбесі көкке жету»",
    "phrases": [
      "Төбесі көкке жету",
      "Төбесі көкке жетті",
      "Төбесі көкке"
    ],
    "phrase": "Төбесі көкке жету"
  },
  "Как две капли воды": {
    "src": "/presentation-assets/illustration-037.jpg",
    "alt": "Иллюстрация выражения «Как две капли воды»",
    "phrases": [
      "Как две капли воды",
      "Как две капли"
    ],
    "phrase": "Как две капли воды"
  },
  "Сокращение: как две капли": {
    "src": "/presentation-assets/illustration-037.jpg",
    "alt": "Иллюстрация выражения «Как две капли воды»",
    "phrases": [
      "Как две капли воды",
      "Как две капли"
    ],
    "phrase": "Как две капли воды"
  }
};
Object.assign(window.LECTURE_IMAGE_MAP, images);
const photos = [
  {
    "src": "/presentation-assets/illustration-001.jpg",
    "alt": "Иллюстрация выражения «Хоть пруд пруди»",
    "phrases": [
      "Хоть пруд пруди"
    ],
    "phrase": "Хоть пруд пруди"
  },
  {
    "src": "/presentation-assets/illustration-002.jpg",
    "alt": "Иллюстрация выражения «Куры не клюют»",
    "phrases": [
      "Куры не клюют"
    ],
    "phrase": "Куры не клюют"
  },
  {
    "src": "/presentation-assets/illustration-004.jpg",
    "alt": "Иллюстрация выражения «Вагон и маленькая тележка»",
    "phrases": [
      "Вагон и маленькая тележка"
    ],
    "phrase": "Вагон и маленькая тележка"
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
    "src": "/presentation-assets/illustration-011.jpg",
    "alt": "Иллюстрация выражения «Со всех ног»",
    "phrases": [
      "Со всех ног",
      "Бежать со всех ног"
    ],
    "phrase": "Со всех ног"
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
    "src": "/presentation-assets/illustration-006.jpg",
    "alt": "Иллюстрация выражения «Көл-көсір»",
    "phrases": [
      "Көл-көсір"
    ],
    "phrase": "Көл-көсір"
  },
  {
    "src": "/presentation-assets/illustration-007.jpg",
    "alt": "Иллюстрация выражения «Ұшан-теңіз»",
    "phrases": [
      "Ұшан-теңіз"
    ],
    "phrase": "Ұшан-теңіз"
  },
  {
    "src": "/presentation-assets/illustration-051.jpg",
    "alt": "Иллюстрация выражения «Көзді ашып-жұмғанша»",
    "phrases": [
      "Көзді ашып-жұмғанша"
    ],
    "phrase": "Көзді ашып-жұмғанша"
  },
  {
    "src": "/presentation-assets/illustration-014.jpg",
    "alt": "Иллюстрация выражения «Қас қаққанша»",
    "phrases": [
      "Қас қаққанша"
    ],
    "phrase": "Қас қаққанша"
  },
  {
    "src": "/presentation-assets/illustration-015.jpg",
    "alt": "Иллюстрация выражения «Сүт пісірім уақытта»",
    "phrases": [
      "Сүт пісірім уақытта",
      "Сүт пісірім уақыт"
    ],
    "phrase": "Сүт пісірім уақытта"
  },
  {
    "src": "/presentation-assets/illustration-019.jpg",
    "alt": "Иллюстрация выражения «С тяжёлым сердцем»",
    "phrases": [
      "С тяжёлым сердцем"
    ],
    "phrase": "С тяжёлым сердцем"
  },
  {
    "src": "/presentation-assets/illustration-020.jpg",
    "alt": "Иллюстрация выражения «С лёгким сердцем»",
    "phrases": [
      "С лёгким сердцем"
    ],
    "phrase": "С лёгким сердцем"
  },
  {
    "src": "/presentation-assets/illustration-017.jpg",
    "alt": "Иллюстрация выражения «Быть на коне»",
    "phrases": [
      "Быть на коне"
    ],
    "phrase": "Быть на коне"
  },
  {
    "src": "/presentation-assets/illustration-018.jpg",
    "alt": "Иллюстрация выражения «У разбитого корыта»",
    "phrases": [
      "У разбитого корыта",
      "Оказаться у разбитого корыта"
    ],
    "phrase": "У разбитого корыта"
  },
  {
    "src": "/presentation-assets/illustration-025.jpg",
    "alt": "Иллюстрация выражения «Жұлдызы жанды»",
    "phrases": [
      "Жұлдызы жанды"
    ],
    "phrase": "Жұлдызы жанды"
  },
  {
    "src": "/presentation-assets/illustration-026.jpg",
    "alt": "Иллюстрация выражения «Жұлдызы сөнді»",
    "phrases": [
      "Жұлдызы сөнді"
    ],
    "phrase": "Жұлдызы сөнді"
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
    "src": "/presentation-assets/no-tsar.jpg",
    "alt": "Иллюстрация выражения «Без царя в голове»",
    "phrases": [
      "Без царя в голове"
    ],
    "phrase": "Без царя в голове"
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
    "src": "/presentation-assets/illustration-022.jpg",
    "alt": "Иллюстрация выражения «Расхлёбывать кашу»",
    "phrases": [
      "Расхлёбывать кашу"
    ],
    "phrase": "Расхлёбывать кашу"
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
    "src": "/presentation-assets/illustration-037.jpg",
    "alt": "Иллюстрация выражения «Как две капли воды»",
    "phrases": [
      "Как две капли воды",
      "Как две капли"
    ],
    "phrase": "Как две капли воды"
  }
];
const merged = new Map(window.LECTURE_KAZAKH_PHOTOS.map(photo => [photo.phrase, photo]));
for (const photo of photos) merged.set(photo.phrase, photo);
window.LECTURE_KAZAKH_PHOTOS.splice(0, window.LECTURE_KAZAKH_PHOTOS.length, ...merged.values());
})();
