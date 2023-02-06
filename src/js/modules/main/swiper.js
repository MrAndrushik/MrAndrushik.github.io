export function initializeSwipers() {
    const stockSwiper = new Swiper('.stock__swiper', {
        spaceBetween: 8,
        grabCursor: true,
        loop: true,
        initialSlide: 1,
        // autoplay: {
        //     delay: 5000,
        // },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            1240: {
                spaceBetween: 8,
                slidesPerView: 3,
            },
            1440: {
                spaceBetween: 32,
                slidesPerView: 'auto',
                slidesPerView: 3,
            },
        },
    });

    const categoriesSwiper = new Swiper('.categories__swiper', {
        spaceBetween: 32,
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.categories__btn--next',
            prevEl: '.categories__btn--prev',
        },
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet--active',
        },

        breakpoints: {
            1: {
                spaceBetween: 16,
                loop: true,
                centeredSlides: true,
            },
            425: {
                grid: false,
                loop: true,
                centeredSlides: true,
            },
            1024: {
                grid: false,
                loop: true,
                centerSlides: false,
            },
            1860: {
                pagination: false,
                grid: false,
                loop: true,
            },
        },
    });

    const hitsSwiper = new Swiper('.hits__swiper', {
        spaceBetween: 32,
        loop: true,
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
            1: {
                slidesPerView: 1,
            },
            425: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            900: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
        },
    });

    const noveltiesSwiper = new Swiper('.novelties__swiper', {
        spaceBetween: 32,
        grabCursor: true,
        loop: true,
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
            1: {
                slidesPerView: 1,
            },
            425: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            900: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
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
        breakpoints: {
            1800: {
                slidesPerView: 'auto',
            },
            1020: {
                slidesPerView: 3,
            },
            900: {
                slidesPerView: 3,
            },
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

    const basketSwiper = new Swiper('.basket__swiper', {
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.basket__btn--next',
            prevEl: '.basket__btn--prev',
        },
    });
}
