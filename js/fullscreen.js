export const viewingFullScreen = (image) => {

  const bigPicture = document.querySelector('.big-picture');

  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = image.url;
  bigPicture.querySelector('.likes-count').textContent = image.likes;
  bigPicture.querySelector('.comments-count').textContent = image.comments.length;

  const commentsWrapper = bigPicture.querySelector('.social__comments');
  commentsWrapper.textContent = '';

  image.comments.forEach((comment) => {
    const template = `
    <li class="social__comment">
      <img
          class="social__picture"
          src="${comment.avatar}"
          alt="${comment.name}"
          width="35" height="35">
      <p class="social__text">${comment.message}</p>
    </li>`;

    commentsWrapper.insertAdjacentHTML('beforeend', template);
  });
  bigPicture.querySelector('.social__caption').textContent = image.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');

  const close = () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  document.querySelector('.big-picture__cancel').addEventListener('click', close);

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      close();
    }
  });
};


