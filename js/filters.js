import { getRandomArrayElements, debounce } from './util.js';
import { createTemplatePicture } from './thumbnail.js';

const filters = document.querySelector('.img-filters');
const buttonsWrapper = document.querySelector('.img-filters__form');
const defaultButton = document.getElementById('filter-default');
const randomButton = document.getElementById('filter-random');
const discussedButton = document.getElementById('filter-discussed');
const filtersButtons = document.querySelectorAll('.img-filters__button');
const RERENDER_DELAY = 500;
const RUNDOM_COUNT = 10;
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
  setActiveButton(defaultButton);
  clearPictures();
  createTemplatePicture(images);
};

const setFilterRandom = () => {
  setActiveButton(randomButton);
  clearPictures();
  const randomImages = getRandomArrayElements(images, RUNDOM_COUNT);
  createTemplatePicture(randomImages);
};

const setFilterDiscussed = () => {
  setActiveButton(discussedButton);
  clearPictures();
  const sortImages = [...images].sort((a, b) => b.comments.length - a.comments.length);
  createTemplatePicture(sortImages);
};

const setFilterHandler = (event) => {
  switch (event.target) {
    case defaultButton:
      setFilterDefault();
      break;
    case randomButton:
      setFilterRandom();
      break;
    case discussedButton:
      setFilterDiscussed();
      break;
    default:
      setFilterDefault();
  }
};

export const openFilters = (items) => {
  images = items;
  filters.classList.remove('img-filters--inactive');

  buttonsWrapper.addEventListener('click', debounce(setFilterHandler, RERENDER_DELAY));
};
