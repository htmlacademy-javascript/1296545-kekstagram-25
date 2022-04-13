import { checkStringLength } from './util.js';
import { startResize, stopResize } from './resize.js';
import { startStyles, stopStyles } from './styles.js';
import { sendData } from './load.js';
import { onFail, onSuccess } from './notification.js';

const uploadImage = document.getElementById('upload-file');
const previewImg = document.querySelector('.img-upload__preview img');
const changeImageForm = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const form = document.getElementById('upload-select-image');
const hashtagsElement = form.querySelector('.text__hashtags');
const descriptionElement = form.querySelector('.text__description');
const submitButton = document.getElementById('upload-submit');

let isCanCloseForm = true;
const pristine = new Pristine(form, {
  classTo: 'text__element',
  errorTextParent: 'text__element',
  errorTextClass: 'text__error-text',
});

const splitAndTrimString = (value) => value.trim().split(' ');

pristine.addValidator(hashtagsElement, (value) => {
  const hashtagsValue = splitAndTrimString(value);
  return hashtagsValue.length <= 5;
}, 'Максимальное количество хештегов 5', 1, false);

pristine.addValidator(hashtagsElement, (value) => {
  const newHashtags = [];
  const hashtagsValue = splitAndTrimString(value);
  let isValid = true;
  hashtagsValue.forEach((hashtag) => {
    if (newHashtags.map((item) => item.toLowerCase().trim()).indexOf(hashtag.toLowerCase().trim()) !== -1) {
      isValid = false;
    }
    newHashtags.push(hashtag);
  });
  return isValid;
}, 'Удалите повторяющиеся хештеги', 2, false);

pristine.addValidator(hashtagsElement, (value) => {
  const hashtagsValue = value ? splitAndTrimString(value) : [];
  const regx = /^(^#[A-Za-zА-Яа-яё0-9]{1,19})$/;
  let isValid = true;
  if (hashtagsValue.length) {
    hashtagsValue.forEach((hashtag) => {
      if (!regx.test(hashtag)) {
        isValid = false;
      }
    });
  }
  return isValid;
}, 'Строка после # должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;'
, 3, false);

pristine.addValidator(descriptionElement, (value) => checkStringLength(value, 140), 'Максимальное количество символов 140', 1, false);

const closeChangeImageFormHandler = () => {
  if (isCanCloseForm) {
    changeImageForm.classList.add('hidden');
    document.body.classList.remove('modal-open');

    stopResize();
    stopStyles();
    closeButton.removeEventListener('click', closeChangeImageFormHandler);
    document.removeEventListener('keydown', clickOnEscHandler);
    form.hashtags.removeEventListener('focus', prohibitClose);
    form.hashtags.removeEventListener('blur', allowClose);
    form.description.removeEventListener('focus', prohibitClose);
    form.description.removeEventListener('blur', allowClose);
    form.reset();
  }
};

function clickOnEscHandler(event) {
  if (event.code === 'Escape') {
    closeChangeImageFormHandler();
  }
}

function allowClose() {
  isCanCloseForm = true;
}

function prohibitClose() {
  isCanCloseForm = false;
}

uploadImage.addEventListener('change', () => {
  if (uploadImage.files && uploadImage.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(uploadImage.files[0]);
    changeImageForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }
  startStyles();
  startResize();
  closeButton.addEventListener('click', closeChangeImageFormHandler);
  document.addEventListener('keydown', clickOnEscHandler);
  form.hashtags.addEventListener('focus', prohibitClose);
  form.hashtags.addEventListener('blur', allowClose);
  form.description.addEventListener('focus', prohibitClose);
  form.description.addEventListener('blur', allowClose);
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        closeChangeImageFormHandler();
        onSuccess();
        unblockSubmitButton();
      },
      () => {
        closeChangeImageFormHandler();
        onFail();
        unblockSubmitButton();
      },
      new FormData(event.target),
    );
  }
});
