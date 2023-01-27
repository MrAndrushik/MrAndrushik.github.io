import { initializeSwiper } from './modules/swiper.js';
import * as testWebp from './modules/webp.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeSwiper();
    testWebp.isWebp();
});
