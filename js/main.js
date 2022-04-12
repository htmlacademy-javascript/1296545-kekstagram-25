import { createTemplatePicture } from './thumbnail.js';
import { getData } from './load.js';
import { showAlert } from './util.js';
import './form.js';

getData(createTemplatePicture, showAlert);
