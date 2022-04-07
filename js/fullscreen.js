const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsWrapper = bigPicture.querySelector('.social__comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentLoaderButton = document.querySelector('.comments-loader');
let totalComments = [];
let totalCommentsShowCount = 0;

const closeBigPictureHandler = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.querySelector('.big-picture__cancel').removeEventListener('click', closeBigPictureHandler);
  document.removeEventListener('keydown', clickOnEscHandler);
  commentLoaderButton.removeEventListener('click', loadComment);
};

function clickOnEscHandler (event) {
  if (event.code === 'Escape') {
    closeBigPictureHandler();
  }
}

function renderComments (comments) {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('.social__comment');
  comments.forEach((comment) => {
    const element = template.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(element);
  });

  commentsWrapper.textContent = '';
  commentsWrapper.appendChild(fragment);
}

function loadComment () {
  let commentLoaded = totalComments;
  if(commentLoaded.length <= 5) {
    commentLoaderButton.classList.add('hidden');
    totalCommentsShowCount = commentLoaded.length;
  } else {
    totalCommentsShowCount = commentLoaded.length > totalCommentsShowCount + 5 ? totalCommentsShowCount + 5 : commentLoaded.length;
    socialCommentCount.textContent = totalCommentsShowCount;
    commentLoaded = totalComments.slice(0, totalCommentsShowCount);
  }
  if(totalCommentsShowCount === totalComments.length) {
    commentLoaderButton.classList.add('hidden');
  }
  renderComments(commentLoaded);
}

export const showFullScreen = (image) => {

  bigPicture.classList.remove('hidden');
  bigPictureImg.src = image.url;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  totalComments = image.comments;
  loadComment(image.comments);

  socialCaption.textContent = image.description;
  document.body.classList.add('modal-open');

  document.querySelector('.big-picture__cancel').addEventListener('click', closeBigPictureHandler);
  document.addEventListener('keydown', clickOnEscHandler);
  commentLoaderButton.addEventListener('click', loadComment);
};


