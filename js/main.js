import {createDescriptionPhotos, NUMBER_PHOTO_OBJECTS} from './data.js';
import {viewingFullScreen} from './fullscreen.js';
import {createTemplatePicture} from './thumbnail.js';

const images = createDescriptionPhotos(NUMBER_PHOTO_OBJECTS);
createTemplatePicture(images);

images.forEach((item) => {
  viewingFullScreen(item);
});

