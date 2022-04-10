const rangeElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');

const none = document.querySelector('.effects__preview--none');
const chrome = document.querySelector('.effects__preview--chrome');
const sepia = document.querySelector('.effects__preview--sepia');
const marvin = document.querySelector('.effects__preview--marvin');
const phobos = document.querySelector('.effects__preview--phobos');
const heat = document.querySelector('.effects__preview--heat');

let currentEffect = 'none';

const noneEffectHandler = () => {
  image.classList = '';
  effectValue.value = 100;
  rangeElement.noUiSlider.reset();
  image.style.filter = 'none';
  rangeElement.classList.add('hidden');
};

const chromeEffectHandler = () => {
  image.classList.add('effects__preview--chrome');
  effectValue.value = 1;
  currentEffect = 'chrome';
  rangeElement.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 1,
    step: 0.1,
    range: {
      'min': 0,
      'max': 1
    }
  });
};

const sepiaEffectHandler = () => {
  image.classList.add('effects__preview--sepia');
  effectValue.value = 1;
  currentEffect = 'sepia';
  rangeElement.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 1,
    step: 0.1,
    range: {
      'min': 0,
      'max': 1
    }
  });
};

const marvinEffectHandler = () => {
  image.classList.add('effects__preview--marvin');
  effectValue.value = 100;
  currentEffect = 'marvin';
  rangeElement.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 100,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });
};

const phobosEffectHandler = () => {
  image.classList.add('effects__preview--phobos');
  effectValue.value = 3;
  currentEffect = 'phobos';
  rangeElement.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 3,
    step: 0.1,
    range: {
      'min': 0,
      'max': 3
    }
  });
};

const heatEffectHandler = () => {
  image.classList.add('effects__preview--heat');
  effectValue.value = 3;
  currentEffect = 'heat';
  rangeElement.classList.remove('hidden');
  rangeElement.noUiSlider.updateOptions({
    start: 3,
    step: 0.1,
    range: {
      'min': 0,
      'max': 3
    }
  });
};

export const stopStyles = () => {
  none.removeEventListener('click', noneEffectHandler);
  chrome.removeEventListener('click', chromeEffectHandler);
  sepia.removeEventListener('click', sepiaEffectHandler);
  marvin.removeEventListener('click', marvinEffectHandler);
  phobos.removeEventListener('click', phobosEffectHandler);
  heat.removeEventListener('click', heatEffectHandler);
};

export const startStyles = () => {
  effectValue.value = 100;

  noUiSlider.create(rangeElement, {
    start: 100,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });

  rangeElement.noUiSlider.on('update', () => {
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
  });

  none.addEventListener('click', noneEffectHandler);
  chrome.addEventListener('click', chromeEffectHandler);
  sepia.addEventListener('click', sepiaEffectHandler);
  marvin.addEventListener('click', marvinEffectHandler);
  phobos.addEventListener('click', phobosEffectHandler);
  heat.addEventListener('click', heatEffectHandler);
};
