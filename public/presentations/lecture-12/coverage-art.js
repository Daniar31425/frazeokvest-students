// Local illustrations matched to the examples spoken in this lecture.
(()=>{
const images = {
  "Волосы встали дыбом": {
    "src": "/presentation-assets/illustration-127.jpg",
    "alt": "Иллюстрация выражения «Волосы встали дыбом»",
    "phrases": [
      "Волосы встали дыбом"
    ],
    "phrase": "Волосы встали дыбом"
  },
  "Төбе шашы тік тұру": {
    "src": "/presentation-assets/illustration-128.jpg",
    "alt": "Иллюстрация выражения «Төбе шашы тік тұру»",
    "phrases": [
      "Төбе шашы тік тұру"
    ],
    "phrase": "Төбе шашы тік тұру"
  },
  "За тридевять земель": {
    "src": "/presentation-assets/illustration-130.jpg",
    "alt": "Иллюстрация выражения «За тридевять земель»",
    "phrases": [
      "За тридевять земель"
    ],
    "phrase": "За тридевять земель"
  },
  "Ит арқасы қиянда": {
    "src": "/presentation-assets/illustration-129.jpg",
    "alt": "Иллюстрация выражения «Ит арқасы қиянда»",
    "phrases": [
      "Ит арқасы қиянда"
    ],
    "phrase": "Ит арқасы қиянда"
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
    "src": "/presentation-assets/illustration-127.jpg",
    "alt": "Иллюстрация выражения «Волосы встали дыбом»",
    "phrases": [
      "Волосы встали дыбом"
    ],
    "phrase": "Волосы встали дыбом"
  },
  {
    "src": "/presentation-assets/illustration-128.jpg",
    "alt": "Иллюстрация выражения «Төбе шашы тік тұру»",
    "phrases": [
      "Төбе шашы тік тұру"
    ],
    "phrase": "Төбе шашы тік тұру"
  },
  {
    "src": "/presentation-assets/illustration-130.jpg",
    "alt": "Иллюстрация выражения «За тридевять земель»",
    "phrases": [
      "За тридевять земель"
    ],
    "phrase": "За тридевять земель"
  },
  {
    "src": "/presentation-assets/illustration-129.jpg",
    "alt": "Иллюстрация выражения «Ит арқасы қиянда»",
    "phrases": [
      "Ит арқасы қиянда"
    ],
    "phrase": "Ит арқасы қиянда"
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
