const ALERT_SHOW_TIME = 5000;

const getRandomInt = (min, max) => {
  if (min < 0 || min === max || min > max){
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

export {
  getRandomInt,
  checkStringLength,
  showAlert
};
