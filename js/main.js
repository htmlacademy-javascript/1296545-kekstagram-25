import {createDescriptionPhotos, NUMBER_PHOTO_OBJECTS} from './data.js';
import {viewingFullScreen} from './fullscreen.js';

const images = createDescriptionPhotos(NUMBER_PHOTO_OBJECTS);
images.forEach((item) => {
  viewingFullScreen(item);
});
