const smallerControl = document.querySelector('.scale__control--smaller');
const biggerControl = document.querySelector('.scale__control--bigger');
const resizeValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const step = 25;
const minValue = 25;
const maxValue = 100;

const setSizeImage = (size) => {
  resizeValue.value = `${size}%`;
  image.style.transform = `scale(${size/100})`;
};

const getValue = () =>  Number(resizeValue.value.replace('%', ''));

const reduceSizeHandler = () => {
  const value = getValue();
  const nextValue = value - step;
  if(nextValue >= minValue) {
    setSizeImage(nextValue);
  }
};

const increaseSizeHandler = () => {
  const value = getValue();
  const nextValue = value + step;
  if(nextValue <= maxValue) {
    setSizeImage(nextValue);
  }
};

export const startResize = () => {
  smallerControl.addEventListener('click', reduceSizeHandler);
  biggerControl.addEventListener('click', increaseSizeHandler);
};

export const stopResize = () => {
  smallerControl.removeEventListener('click', reduceSizeHandler);
  biggerControl.removeEventListener('click', increaseSizeHandler);
};
