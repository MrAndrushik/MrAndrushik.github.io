export function initializeSwiper() {
    const swiper = new Swiper('.stock__swiper', {
        spaceBetween: 32,
        // loop: true,
        grabCursor: true,
        // initialSlide: 1,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
        },
    });
}
