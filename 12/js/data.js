import { getRandomInt } from './util.js';

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

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const createRandomComment = (_elem, id) => ({
  id: String(++id).padStart(2, '0'),
  avatar: `img/avatar-${getRandomInt(1, 6).toString()}.svg`,
  message: getRandomArrayElement(ARRAY_TEXT_COMMENTS),
  name: getRandomArrayElement(USERS_NAMES),
});

const NUMBER_PHOTO_OBJECTS = 25;

const getPathPhoto = (n) => `photos/${n.toString()}.jpg`;

const createObjectsDescriptionPhoto = (obId) => {
  const NunberComments = getRandomInt(1, 6);
  const obPhoto = {
    id: obId,
    url: getPathPhoto(obId),
    description: PHOTO_DESCRIPTION[getRandomInt(0, 3)],
    likes: getRandomInt(15, 200),
    comments: Array.from({
      length: NunberComments,
    }, createRandomComment),
  };
  return obPhoto;
};

const createDescriptionPhotos = (n) => {
  const descriptionPhotos = [];
  for (let i = 1; i <= n; i++) {
    descriptionPhotos.push(createObjectsDescriptionPhoto(i));
  }
  return descriptionPhotos;
};

export {
  createDescriptionPhotos,
  NUMBER_PHOTO_OBJECTS
};
