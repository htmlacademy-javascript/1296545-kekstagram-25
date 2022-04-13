import { getRandomArrayElements, debounce } from './util.js';
import { createTemplatePicture } from './thumbnail.js';

const filters = document.querySelector('.img-filters');
const defaultButton = document.getElementById('filter-default');
const randomButton = document.getElementById('filter-random');
const discussedButton = document.getElementById('filter-discussed');
const filtersButtons = document.querySelectorAll('.img-filters__button');
const RERENDER_DELAY = 500;
let images = [];

const clearPictures = () => {
  const imagesElement = document.querySelectorAll('a.picture');
  imagesElement.forEach((element) => element.remove());
};

const setActiveButton = (newActiveElement) => {
  filtersButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
  newActiveElement.classList.add('img-filters__button--active');
};

const setFilterDefault = () => {
  clearPictures();
  createTemplatePicture(images);
};

const setFilterRandom = () => {
  clearPictures();
  const randomImages = getRandomArrayElements(images, 10);
  createTemplatePicture(randomImages);
};

const setFilterDiscussed = () => {
  clearPictures();
  const sortImages = [...images].sort((a, b) => b.comments.length - a.comments.length);
  createTemplatePicture(sortImages);
};

const setFilterHandler = (name) => {
  switch (name) {
    case 'default':
      setFilterDefault();
      break;
    case 'random':
      setFilterRandom();
      break;
    case 'discussed':
      setFilterDiscussed();
      break;
    default:
      setFilterDefault();
  }
};

export const openFilters = (items) => {
  images = items;
  filters.classList.remove('img-filters--inactive');

  defaultButton.addEventListener('click', () => {
    setActiveButton(defaultButton);
    debounce(setFilterHandler('default'), RERENDER_DELAY);
  });
  randomButton.addEventListener('click', () => {
    setActiveButton(randomButton);
    debounce(setFilterHandler('random'), RERENDER_DELAY);
  });
  discussedButton.addEventListener('click', () => {
    setActiveButton(discussedButton);
    debounce(setFilterHandler('discussed'), RERENDER_DELAY);
  });
};
