document.addEventListener('DOMContentLoaded', function() {
    const cartWrapper = document.querySelector(".cart__container")
    cartWrapper.innerHTML = "";

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key == 'cartCounter') continue
        let currentItem = JSON.parse(localStorage.getItem(key))
        let currentItemHTML = `<div class="cart__item">
            <img src="${currentItem.src}" alt="" class="cart__img">
            <h3 class="cart__name">${currentItem.title}</h3>
            <p class="cart__price">${currentItem.price}</p>
            <p class="cart__counter">Количество: <span class="cart__counter_span">${currentItem.quantity}</p>
            <div class="cart__buttons">
                <button class="cart__btn" data-action="plus">+</button>
                <button class="cart__btn" data-action="minus">-</button>
            </div>
        </div>`
        cartWrapper.insertAdjacentHTML('beforeend', currentItemHTML)
    }
    
    document.addEventListener('click', function(event) {
        if (event.target.dataset.action === 'plus') {
            cartItem = event.target.closest(".cart__item")
            const cartItemTitle = cartItem.querySelector(".cart__name").innerHTML
            const localItem = JSON.parse(localStorage.getItem(cartItemTitle))
            localItem.quantity = +localItem.quantity + 1;
            localStorage.setItem(cartItemTitle, JSON.stringify(localItem))
            lolacCartCounter = localStorage.getItem('cartCounter')
            lolacCartCounter = +lolacCartCounter + 1
            localStorage.setItem('cartCounter', lolacCartCounter);
            const cartCounter = document.querySelector("._counter")
            cartCounter.innerHTML = lolacCartCounter
        }

        cartWrapper.innerHTML = "";
        if (localStorage.length > 1) {
            for(let i=0; i<localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key == 'cartCounter') continue
                let currentItem = JSON.parse(localStorage.getItem(key))
                let currentItemHTML = `<div class="cart__item">
                    <img src="${currentItem.src}" alt="" class="cart__img">
                    <h3 class="cart__name">${currentItem.title}</h3>
                    <p class="cart__price">${currentItem.price}</p>
                    <p class="cart__counter">Количество: <span class="cart__counter_span">${currentItem.quantity}</p>
                    <div class="cart__buttons">
                        <button class="cart__btn" data-action="plus">+</button>
                        <button class="cart__btn" data-action="minus">-</button>
                    </div>
                </div>`
                cartWrapper.insertAdjacentHTML('beforeend', currentItemHTML)
            }
        }

        if (event.target.classList.contains('btn__clear-cart')) {
            cartWrapper.innerHTML = "";
            const cartCounter = document.querySelector("._counter")
            localStorage.clear()
            localStorage.setItem('cartCounter', '0');
            lolacCartCounter = localStorage.getItem('cartCounter');
            console.log()
            cartCounter.innerHTML = `${lolacCartCounter}`;
        }

        if (event.target.dataset.action === 'minus') {
            cartItem = event.target.closest(".cart__item")
            const cartItemTitle = cartItem.querySelector(".cart__name").innerHTML
            const localItem = JSON.parse(localStorage.getItem(cartItemTitle))
            localItem.quantity = +localItem.quantity - 1;
            localStorage.setItem(cartItemTitle, JSON.stringify(localItem))
            lolacCartCounter = localStorage.getItem('cartCounter')
            lolacCartCounter = +lolacCartCounter - 1
            localStorage.setItem('cartCounter', lolacCartCounter);
            const cartCounter = document.querySelector("._counter")
            cartCounter.innerHTML = lolacCartCounter
            if (localItem.quantity == 0) {
                console.log(localStorage.getItem(cartItemTitle))
                localStorage.removeItem(cartItemTitle)
            }
            cartWrapper.innerHTML = "";
            for(let i=0; i<localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key == 'cartCounter') continue
                let currentItem = JSON.parse(localStorage.getItem(key))
                let currentItemHTML = `<div class="cart__item">
                    <img src="${currentItem.src}" alt="" class="cart__img">
                    <h3 class="cart__name">${currentItem.title}</h3>
                    <p class="cart__price">${currentItem.price}</p>
                    <p class="cart__counter">Количество: <span class="cart__counter_span">${currentItem.quantity}</p>
                    <div class="cart__buttons">
                        <button class="cart__btn" data-action="plus">+</button>
                        <button class="cart__btn" data-action="minus">-</button>
                    </div>
                </div>`
                cartWrapper.insertAdjacentHTML('beforeend', currentItemHTML)
            }
        }

    });

});
