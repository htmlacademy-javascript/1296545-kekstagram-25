const getRandomInt = (min, max) => {
  if (min < 0 || min === max || min > max){
    throw new Error('Переданные числа некорректны');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomInt(2, 5);


const checkStringLength = (str, maxLength) => str.length <= maxLength;
checkStringLength('Hello man', 9);

const ARRAY_TEXT_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USERS_NAMES = [
  'Мария',
  'Светлана',
  'Сергей',
  'Александр',
  'Дмитрий',
  'Людмила',
  'Валерия',
  'Иван',
  'Семен',
];

const PHOTO_DESCRIPTION = [
  'Передо мной интересная (удачная, занимательная и т.п.) фотография.',
  'Давайте рассмотрим изображение внимательнее.',
  'Я считаю, что снимок получился (смешным, занимательным, удачным, завораживающим и т.д.)',
  'Мне понравилась фотография, потому что она (четко передает чувства, эмоции, атмосферу).',
];

const creatRandomComment = (_elem, id) => ({
  id: String(++id).padStart(2, '0'),
  avatar: `img/avatar/${getRandomInt(1, 6).toString()}.svg`,
  message: ARRAY_TEXT_COMMENTS[getRandomInt(0, 6)],
  name: USERS_NAMES[getRandomInt(0, 8)],
});

const accepFoto = (n) => `photos/${n.toString()}.jpg`;

const generatOb = (obId) => {
  const obKeks = {
    id:obId,
    url:accepFoto(obId),
    description: PHOTO_DESCRIPTION[getRandomInt(0, 4)],
    likes:getRandomInt(15, 20),
    comments: Array.from({
      length: getRandomInt(1, 6),
    }, creatRandomComment),
  };
  return obKeks;
};

const createArr = (n) => {
  const arr1 = [];
  for (let i = 0; i <= n; i++) {
    arr1[i] = generatOb(i + 1);
  };
  return arr1;
};
console.log(createArr(10));
