const getRandomInt = (min, max) => {
  if (min < 0 || min === max || min > max){
    throw new Error('Переданные числа некорректны');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomInt(2, 5);


const checkStringLength = (str, maxLength) => str.length <= maxLength;
checkStringLength('Hello man', 9);

const generatOb = (obId) => {
  const obKeks = {
    id:obId,
    url:accepFoto(obId),
    description: 'описание фотографии',
    likes:getRandomInt(15, 20),
  };
  return obKeks;
};

const accepFoto = (n) => 'photos/' + n.toString() + '.jpg';

const createArr = (n) => {
  const arr1 = [];
  for (let i = 0; i <= n; i++) {
    arr1[i] = generatOb(i + 1);
  };
  return arr1;
};
console.log(createArr(25));


const SIMILAR_ANNOUNCEMENT_COUNT = 10;

const createRandomAnnouncement = (_elem, id) => ({
  id: String(++id).padStart(2, '0'),
  avatar: 'img/avatar-'+ getRandomInt(1, 6).toString() + '.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
});

console.log(
  Array.from({
    length: SIMILAR_ANNOUNCEMENT_COUNT,
  }, createRandomAnnouncement),
);

