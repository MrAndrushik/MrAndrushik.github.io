import { initializeSwipers } from './modules/main/swiper.js';
import { removeScroll } from './modules/removeScroll.js';

document.addEventListener('DOMContentLoaded', () => {
    const select = new TomSelect('#header-country', {
        create: false,
        valueField: 'id',
        searchField: 'title',
        closeAfterSelect: true,
        options: [
            { id: 1, src: 'img/header/Russia.svg' },
            { id: 2, src: 'img/header/Kazakhstan.svg' },
            { id: 3, src: 'img/header/US.svg' },
        ],
        items: [1],
        hideSelected: true,
        render: {
            option: function (data, escape) {
                return `<div class='country__option'><img src="${data.src}" class="country__img"></img></div>`;
            },
            item: function (data, escape) {
                return `<div class='country__item'><img src="${data.src}" class="country__img"></img></div>`;
            },
            dropdown: function () {
                return '<div class="country__dropdown"></div>';
            },
        },
    });
    select.on('change', () => {
        select.blur();
    });
    initializeSwipers();
});
