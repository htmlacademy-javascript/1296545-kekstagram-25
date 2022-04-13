import { createTemplatePicture } from './thumbnail.js';
import { getData } from './load.js';
import { showAlert } from './util.js';
import {openFilters} from './filters.js';
import './form.js';

getData((images) => {
  createTemplatePicture(images);
  openFilters(images);
}, showAlert);
