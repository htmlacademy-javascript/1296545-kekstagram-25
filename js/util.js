const getRandomInt = (min, max) => {
  if (min < 0 || min === max || min > max){
    throw new Error('Переданные числа некорректны');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (str, maxLength) => str.length <= maxLength;

export {
  getRandomInt,
  checkStringLength
};
