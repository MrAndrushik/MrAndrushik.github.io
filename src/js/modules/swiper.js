export function initializeSwipers() {
    const stockSwiper = new Swiper('.stock__swiper', {
        spaceBetween: 8,
        grabCursor: true,
        initialSlide: 1,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },
        breakpoints: {
            1240: {
                spaceBetween: 32,
            },
        },
    });

    const categoriesSwiper = new Swiper('.categories__swiper', {
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 'auto',
        grid: {
            rows: 2,
            fill: 'row',
        },
        navigation: {
            nextEl: '.categories__btn--next',
            prevEl: '.categories__btn--prev',
        },

        breakpoints: {
            1: {
                spaceBetween: 16,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: 'bullet',
                    bulletActiveClass: 'bullet--active',
                },
            },
            900: {
                pagination: false,
            },
            1240: {
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
        },
    });

    const hitsSwiper = new Swiper('.hits__swiper', {
        spaceBetween: 32,
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },
        navigation: {
            nextEl: '.hits__btn--next',
            prevEl: '.hits__btn--prev',
        },
        breakpoints: {
            900: {
                spaceBetween: 32,
            },
        },
    });

    const noveltiesSwiper = new Swiper('.novelties__swiper', {
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },
        navigation: {
            nextEl: '.novelties__btn--next',
            prevEl: '.novelties__btn--prev',
        },
        breakpoints: {
            900: {
                spaceBetween: 32,
            },
        },
    });

    const informationSwiper = new Swiper('.information__swiper', {
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },
    });

    const featuresSwiper = new Swiper('.features__swiper', {
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },
        breakpoints: {
            900: {
                slidesPerView: 3,
            },
        },
    });

    const cardSwiper = new Swiper('.card__swiper', {
        spaceBetween: 0,
        grabCursor: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'card__bullet',
            bulletActiveClass: 'card__bullet--active',
            type: 'bullets',
            clickable: true,
        },
    });
}
