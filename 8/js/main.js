import {createDescriptionPhotos, NUMBER_PHOTO_OBJECTS} from './data.js';
import {createTemplatePicture} from './thumbnail.js';
import './form.js';

const images = createDescriptionPhotos(NUMBER_PHOTO_OBJECTS);
createTemplatePicture(images);


