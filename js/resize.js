const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const smallerControl = document.querySelector('.scale__control--smaller');
const biggerControl = document.querySelector('.scale__control--bigger');
const resizeValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const setSizeImage = (size) => {
  resizeValue.value = `${size}%`;
  image.style.transform = `scale(${size/100})`;
};

const getValue = () =>  Number(resizeValue.value.replace('%', ''));

const reduceSizeHandler = () => {
  const value = getValue();
  const nextValue = value - STEP;
  if(nextValue >= MIN_VALUE) {
    setSizeImage(nextValue);
  }
};

const increaseSizeHandler = () => {
  const value = getValue();
  const nextValue = value + STEP;
  if(nextValue <= MAX_VALUE) {
    setSizeImage(nextValue);
  }
};

export const startResize = () => {
  resizeValue.value = '100%';
  image.style.transform = 'scale(1)';
  smallerControl.addEventListener('click', reduceSizeHandler);
  biggerControl.addEventListener('click', increaseSizeHandler);
};

export const stopResize = () => {
  smallerControl.removeEventListener('click', reduceSizeHandler);
  biggerControl.removeEventListener('click', increaseSizeHandler);
};
