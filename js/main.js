const getRandomInt = (min, max) =>
    if (min < 0 || min === max || min > max){
    throw new Error('Переданные числа некорректны');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(2, 5);


const checkStringLength = (str, maxLetngth) => str.length <= maxLetngth;
checkStringLength('Hello man', 9);
