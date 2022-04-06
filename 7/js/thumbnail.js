import {showFullScreen} from './fullscreen.js';

export const createTemplatePicture = (images) => {
  const wrapper =  document.querySelector('#picture');
  const template = wrapper.content.querySelector('.picture');
  const pictures = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  images.forEach((image) => {
    const element = template.cloneNode(true);
    element.querySelector('.picture__img').src = image.url;
    element.querySelector('.picture__likes').textContent = image.likes;
    element.querySelector('.picture__comments').textContent = image.comments.length;

    element.addEventListener('click', () => {
      showFullScreen(image);
    });

    fragment.appendChild(element);
  });

  pictures.appendChild(fragment);
};
