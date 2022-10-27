const swiper1 = new Swiper('.ln-tags__swiper', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 8,
});

const swiper2 = new Swiper('.ln-processing__swiper', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 16,
});

document.addEventListener('DOMContentLoaded', () => {
    // GLOBAL VAR START
    const heroLink = document.querySelector('#ln-hero');
    // GLOBAL VAR START
    // MOBILE MENU START
    const menuWrapper = document.querySelector('.ln-header__list');
    const burgerBtn = document.querySelector('.ln-burger');
    const menuCloseBtn = document.querySelector('.ln-header__close');
    burgerBtn.onclick = () => {
        menuWrapper.classList.toggle('ln-header__list--active');
    };
    menuCloseBtn.onclick = () => {
        menuWrapper.classList.remove('ln-header__list--active');
    };
    // MOBILE MENU END
    // SECTION TAGS START
    const allSections = document.querySelectorAll('[data-section]');
    const allTags = document.querySelectorAll('[data-target]');
    const heroImg = document.querySelector('.ln-hero__img');
    allTags.forEach(
        (tag) =>
            (tag.onclick = () => {
                const dataSection = tag.dataset.target;
                let currentSection = document.querySelector(
                    `[data-section="${dataSection}"]`
                );
                allTags.forEach((tag) =>
                    tag.classList.remove('ln-tag--active')
                );
                allSections.forEach((section) =>
                    section.classList.remove('ln-section--active')
                );
                if (dataSection.includes('#footer')) {
                    const currentTag = dataSection.split('#footer')[0];
                    currentSection = document.querySelector(
                        `[data-section="${currentTag}"]`
                    );
                    const topTag = document.querySelector(
                        `[data-target="${currentTag}"]`
                    );
                    const menuTag = document.querySelector(
                        `[data-target="${currentTag}#menu"]`
                    );
                    menuTag.classList.add('ln-tag--active');
                    topTag.classList.add('ln-tag--active');
                    heroImg.src = `/assets/img/hero/hero-${currentTag}.svg`;
                    setTimeout(() => {
                        window.scrollTo({
                            top: heroLink.getBoundingClientRect().height + 60,
                            behavior: 'smooth',
                        });
                    }, 0);
                } else if (dataSection.includes('#menu')) {
                    const currentTag = dataSection.split('#menu')[0];
                    currentSection = document.querySelector(
                        `[data-section="${currentTag}"]`
                    );
                    const topTag = document.querySelector(
                        `[data-target="${currentTag}"]`
                    );
                    topTag.classList.add('ln-tag--active');
                    heroImg.src = `/assets/img/hero/hero-${currentTag}.svg`;
                    setTimeout(() => {
                        window.scrollTo({
                            top: heroLink.getBoundingClientRect().height + 60,
                            behavior: 'smooth',
                        });
                    }, 0);
                    tag.classList.add('ln-tag--active');
                } else {
                    const menuTag = document.querySelector(
                        `[data-target="${dataSection}#menu"]`
                    );
                    menuTag.classList.add('ln-tag--active');
                    tag.classList.add('ln-tag--active');
                    heroImg.src = `/assets/img/hero/hero-${dataSection}.svg`;
                }
                currentSection.classList.add('ln-section--active');
            })
    );
    // SECTION TAGS END

    // TAGLINE START
    const participantsTags = document.querySelectorAll('.ln-participants__tag');
    const participantList = document.querySelectorAll('.ln-participants__list');
    participantsTags.forEach((tag) =>
        tag.addEventListener('click', (e) => {
            const participant = tag.dataset.participant;
            const currentList = document.querySelector(
                `[data-participant-list="${participant}"]`
            );

            participantsTags.forEach((tag) =>
                tag.classList.remove('ln-participants__tag--active')
            );
            tag.classList.add('ln-participants__tag--active');

            participantList.forEach((list) => {
                list.classList.remove('ln-participants__list--active');
            });
            currentList.classList.add('ln-participants__list--active');
        })
    );

    const apiTags = document.querySelectorAll('.ln-api__tag');
    const apiList = document.querySelectorAll('.ln-api__wrapper');
    apiTags.forEach((tag) =>
        tag.addEventListener('click', (e) => {
            const variant = tag.dataset.api;
            const currentList = document.querySelector(
                `[data-api-list="${variant}"]`
            );

            apiTags.forEach((tag) =>
                tag.classList.remove('ln-api__tag--active')
            );
            tag.classList.add('ln-api__tag--active');

            apiList.forEach((list) => {
                list.classList.remove('ln-api__wrapper--active');
            });
            currentList.classList.add('ln-api__wrapper--active');
        })
    );
    // TAGLINE END

    // NAVIGATION START
    document.addEventListener('scroll', () => {
        const stickyMenu = document.querySelector('.ln-navigation');
        if (window.scrollY > heroLink.getBoundingClientRect().height) {
            stickyMenu.classList.add('ln-navigation--sticky');
        } else {
            stickyMenu.classList.remove('ln-navigation--sticky');
        }
    });
    // NAVIGATION END
});
