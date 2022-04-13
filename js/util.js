const ALERT_SHOW_TIME = 5000;

const getRandomInt = (min, max) => {
  if (min < 0 || min === max || min > max) {
    throw new Error('Переданные числа некорректны');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (str, maxLength) => str.length <= maxLength;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getRandomArrayElements = (elements, number) => {
  const result = new Array(number);
  let len = elements.length;
  const taken = new Array(len);
  if (number > len) {
    return elements;
  }
  while (number--) {
    const x = Math.floor(Math.random() * len);
    result[number] = elements[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export {
  getRandomInt,
  checkStringLength,
  showAlert,
  debounce,
  getRandomArrayElements
};
