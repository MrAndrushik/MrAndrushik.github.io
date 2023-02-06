export function removeScroll(flag) {
    if (flag) {
        let div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        document.body.classList.add('non-scrollable');
        document.body.style.paddingRight = scrollWidth + 'px';
    } else {
        document.body.classList.remove('non-scrollable');
        document.body.style.paddingRight = 0 + 'px';
    }
}
