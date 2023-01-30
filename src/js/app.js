import { initializeSwipers } from './modules/swiper.js';
import * as testWebp from './modules/webp.js';

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector('.footer__list')
        .querySelectorAll('.footer__block')
        .forEach((block) => {
            const btn = block.querySelector('.footer__dropdownBtn');
            const links = block.querySelector('.footer__links');
            btn.onclick = () => {
                if (btn.classList.contains('footer__dropdownBtn--active')) {
                    btn.classList.remove('footer__dropdownBtn--active');
                    links.classList.remove('footer__links--active');
                } else {
                    btn.classList.add('footer__dropdownBtn--active');
                    links.classList.add('footer__links--active');
                }
            };
        });
    initializeSwipers();
});
