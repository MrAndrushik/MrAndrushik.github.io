import { removeScroll } from './modules/removeScroll.js';

document.addEventListener('DOMContentLoaded', () => {
    // FOOTER TAGS START
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
    // FOOTER END

    // MENU START
    const menuBtn = document.querySelectorAll('.header__menuBtn');
    const header = document.querySelector('.header');
    const menuOverlay = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const allTags = document.querySelectorAll('[data-menu-type]');
    const allMenues = document.querySelectorAll('[data-menu-block]');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const backBtn = document.querySelector('.menu__back');

    backBtn.onclick = () => {
        menuWrapper.classList.remove('menu__wrapper--active');
        menuOverlay.classList.remove('non-scrollable');
    };

    // BANNER START
    const banner = document.querySelector('.banner');
    const bannerBtn = document.querySelector('.banner__btn');
    bannerBtn.onclick = () => {
        banner.remove();
        menuOverlay.style.top = header.clientHeight + 'px';
        menuOverlay.style.height = `calc(100vh - ${header.clientHeight}px)`;
    };
    // BANNER END

    menuBtn.forEach((btn) => {
        btn.onclick = () => {
            document.querySelector('.header__geo').classList.toggle('header__geo--active');
            btn.classList.toggle('header__menuBtn--active');
            menuOverlay.classList.toggle('menu--active');
            // overlay.classList.toggle('overlay--active');
            menuOverlay.style.top = header.clientHeight + 'px';
            menuOverlay.style.height = `calc(100vh - ${header.clientHeight}px)`;
            removeScroll(menuOverlay.classList.contains('menu--active'));
            // document.body.classList.toggle('non-scrollable');
        };
    });
    allTags.forEach((tag) => {
        const dataAtr = tag.dataset.menuType;
        const subMenu = document.querySelector(`[data-menu-block='${dataAtr}']`);
        tag.onclick = () => {
            menuOverlay.classList.add('non-scrollable');
            allTags.forEach((tag) => tag.classList.remove('menu__tag--selected'));
            allMenues.forEach((menu) => menu.classList.remove('menu__block--selected'));
            menuWrapper.classList.add('menu__wrapper--active');
            tag.classList.add('menu__tag--selected');
            subMenu.classList.add('menu__block--selected');
        };
    });
    // MENU END

    // BUSKET START
    const basketBtn = document.querySelector('.header__basket');
    const basket = document.querySelector('.basket');
    const basketCloseBtn = document.querySelector('.basket__close');

    overlay.onclick = () => {
        overlay.classList.remove('overlay--active2');
        basket.classList.remove('basket--active');
    };

    basketBtn.onclick = () => {
        basket.classList.add('basket--active');
        overlay.classList.add('overlay--active2');
    };

    basketCloseBtn.onclick = () => {
        basket.classList.remove('basket--active');
        overlay.classList.remove('overlay--active2');
    };
    // BUSKET END

    // HEADER START
    const phoneOpener = document.querySelectorAll('.header__all');
    phoneOpener.forEach((btn) => {
        btn.onclick = () => {
            document.querySelectorAll('.header__number').forEach((btn) => {
                btn.innerHTML = '+7 700 836-85-12';
                btn.setAttribute('href', 'tel:77008368512');
            });
            btn.remove();
        };
    });
    // HEADER END

    // SCROLLBTN START
    const scrollTopBtn = document.querySelector('.scrollTopBtn');
    scrollTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.addEventListener('scroll', () => {
        if (window.innerHeight * 2 > window.scrollY) {
            scrollTopBtn.classList.remove('scrollTopBtn--active');
        } else {
            scrollTopBtn.classList.add('scrollTopBtn--active');
        }
    });
    // SCROLLBTN END
});
