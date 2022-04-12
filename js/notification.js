const errorTemplate = document.getElementById('error').content.querySelector('.error');
const successTemplate = document.getElementById('success').content.querySelector('.success');

const successElement = successTemplate.cloneNode(true);
document.body.appendChild(successElement);
successElement.classList.add('hidden');

const errorElement = errorTemplate.cloneNode(true);
document.body.appendChild(errorElement);
errorElement.classList.add('hidden');

const closeButtonError = document.querySelector('.error__button');
const closeButtonSuccess = document.querySelector('.success__button');

const openModal = (element, closeButton) => {
  element.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', () => {
    element.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }, { once: true });
};

export const onSuccess = () => {
  openModal(successElement, closeButtonSuccess);
};


export const onFail = () => {
  openModal(errorElement, closeButtonError);
};
