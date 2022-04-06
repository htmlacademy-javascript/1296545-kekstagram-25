const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsWrapper = bigPicture.querySelector('.social__comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

export const showFullScreen = (image) => {

  bigPicture.classList.remove('hidden');
  bigPictureImg.src = image.url;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;

  const fragment = document.createDocumentFragment();
  const template = document.querySelector('.social__comment');

  image.comments.forEach((comment) => {
    const element = template.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(element);
  });
  commentsWrapper.textContent = '';
  commentsWrapper.appendChild(fragment);

  socialCaption.textContent = image.description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  const closeBigPictureHandler = () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  document.querySelector('.big-picture__cancel').addEventListener('click', closeBigPictureHandler);

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeBigPictureHandler();
    }
  });
};


