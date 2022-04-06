const uploadImage = document.getElementById('upload-file');
const previewImg = document.querySelector('.img-upload__preview img');
const changeImageForm = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const form = document.getElementById('upload-select-image');
let isCanCloseForm = true;

const closeChangeImageFormHandler = () => {
  if(isCanCloseForm) {
    changeImageForm.classList.add('hidden');
    document.body.classList.remove('modal-open');

    closeButton.removeEventListener('click', closeChangeImageFormHandler);
    document.removeEventListener('keydown', clickOnEscHandler);
    form.hashtags.removeEventListener('focus', prohibitClose);
    form.hashtags.removeEventListener('blur', allowClose);
    form.description.removeEventListener('focus', prohibitClose);
    form.description.removeEventListener('blur', allowClose);
  }
};

function clickOnEscHandler (event) {
  if (event.code === 'Escape') {
    closeChangeImageFormHandler();
  }
}

function allowClose () {
  isCanCloseForm = true;
}

function prohibitClose () {
  isCanCloseForm = false;
}

export const uploadFile = () => {
  uploadImage.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImg.src = e.target.result;
      };
      reader.readAsDataURL(this.files[0]);
      changeImageForm.classList.remove('hidden');
      document.body.classList.add('modal-open');
    }

    closeButton.addEventListener('click', closeChangeImageFormHandler);
    document.addEventListener('keydown', clickOnEscHandler);
    form.hashtags.addEventListener('focus', prohibitClose);
    form.hashtags.addEventListener('blur', allowClose);
    form.description.addEventListener('focus', prohibitClose);
    form.description.addEventListener('blur', allowClose);
  });

  form.addEventListener('submit', (event) => {
    let isValid = true;
    const newHashtags = [];
    const hashtags = form.hashtags.value.trim().split(' ');
    const regx = /^(^#[A-Za-zА-Яа-яё0-9]{1,19})$/;

    if(hashtags.length > 5 || form.description.value.length > 140) {
      isValid = false;
    }

    hashtags.forEach((hashtag) => {
      if(hashtag === '#') {
        isValid = false;
      }
      if(!regx.test(hashtag)) {
        isValid = false;
      }
      if(newHashtags.map((item) => item.toLowerCase().trim()).indexOf(hashtag.toLowerCase().trim()) !== -1) {
        isValid = false;
      }
      newHashtags.push(hashtag);
    });

    if(!isValid) {
      event.preventDefault();
    }
  });
};
