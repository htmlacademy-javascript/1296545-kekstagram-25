const rangeElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');
const rangeField = document.querySelector('.img-upload__effect-level');

const none = document.querySelector('.effects__preview--none');
const chrome = document.querySelector('.effects__preview--chrome');
const sepia = document.querySelector('.effects__preview--sepia');
const marvin = document.querySelector('.effects__preview--marvin');
const phobos = document.querySelector('.effects__preview--phobos');
const heat = document.querySelector('.effects__preview--heat');

let currentEffect = 'none';

noUiSlider.create(rangeElement, {
  start: 100,
  step: 1,
  range: {
    min: 0,
    max: 100
  },
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value),
  },
});

const noneEffectHandler = () => {
  image.classList = '';
  effectValue.value = 100;
  rangeElement.noUiSlider.reset();
  image.style.filter = 'none';
  rangeField.classList.add('hidden');
};

const chromeEffectHandler = () => {
  image.classList.add('effects__preview--chrome');
  effectValue.value = 1;
  currentEffect = 'chrome';
  rangeField.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 1,
    step: 0.1,
    range: {
      min: 0,
      max: 1
    }
  });
};

const sepiaEffectHandler = () => {
  image.classList.add('effects__preview--sepia');
  effectValue.value = 1;
  currentEffect = 'sepia';
  rangeField.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 1,
    step: 0.1,
    range: {
      min: 0,
      max: 1
    }
  });
};

const marvinEffectHandler = () => {
  image.classList.add('effects__preview--marvin');
  effectValue.value = 100;
  currentEffect = 'marvin';
  rangeField.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 100,
    step: 1,
    range: {
      min: 0,
      max: 100
    }
  });
};

const phobosEffectHandler = () => {
  image.classList.add('effects__preview--phobos');
  effectValue.value = 3;
  currentEffect = 'phobos';
  rangeField.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 3,
    step: 0.1,
    range: {
      min: 0,
      max: 3
    }
  });
};

const heatEffectHandler = () => {
  image.classList.add('effects__preview--heat');
  effectValue.value = 3;
  currentEffect = 'heat';
  rangeField.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 3,
    step: 0.1,
    range: {
      min: 1,
      max: 3
    }
  });
};

const changeStyleHandler = () => {
  effectValue.value = rangeElement.noUiSlider.get();
  switch (currentEffect) {
    case 'chrome':
      image.style.filter = `grayscale(${effectValue.value})`;
      break;
    case 'sepia':
      image.style.filter = `sepia(${effectValue.value})`;
      break;
    case 'marvin':
      image.style.filter = `invert(${effectValue.value}%)`;
      break;
    case 'phobos':
      image.style.filter = `blur(${effectValue.value}px)`;
      break;
    case 'heat':
      image.style.filter = `brightness(${effectValue.value})`;
      break;
    default:
      image.style.filter = 'none';
  }
};

export const stopStyles = () => {
  none.removeEventListener('click', noneEffectHandler);
  chrome.removeEventListener('click', chromeEffectHandler);
  sepia.removeEventListener('click', sepiaEffectHandler);
  marvin.removeEventListener('click', marvinEffectHandler);
  phobos.removeEventListener('click', phobosEffectHandler);
  heat.removeEventListener('click', heatEffectHandler);
  rangeElement.noUiSlider.off('update');
};

export const startStyles = () => {
  rangeElement.noUiSlider.updateOptions({
    start: 100,
    step: 1,
    range: {
      min: 0,
      max: 100
    }
  });
  image.style.filter = 'none';
  image.classList = '';
  effectValue.value = 100;
  rangeField.classList.add('hidden');
  currentEffect = 'none';

  rangeElement.noUiSlider.on('update', changeStyleHandler);

  none.addEventListener('click', noneEffectHandler);
  chrome.addEventListener('click', chromeEffectHandler);
  sepia.addEventListener('click', sepiaEffectHandler);
  marvin.addEventListener('click', marvinEffectHandler);
  phobos.addEventListener('click', phobosEffectHandler);
  heat.addEventListener('click', heatEffectHandler);
};
