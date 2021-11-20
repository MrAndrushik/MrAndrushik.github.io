document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY 
        if (scrollPosition > 400) {
            document.querySelector(".header").classList.add("header_fixed")
            document.querySelector(".hero").classList.add("hero_margin")
        }
        else {
            document.querySelector(".header").classList.remove("header_fixed")
            document.querySelector(".hero").classList.remove("hero_margin")
        }
    });


    // Counter из LocalStorage и Counter в разметке
    let lolacCartCounter = localStorage.getItem('cartCounter')
    const cartCounter = document.querySelector("._counter")
    cartCounter.innerHTML = `${lolacCartCounter}`


    window.addEventListener('click', function(event) {

        // Убираем popup с информацией о добавлении
        if (event.target.classList.contains('information__ok')) {
            document.querySelector('.information').classList.remove('visible')
        }

        // Максимально по даунски, надо глянуть как лучше
        if (event.target.classList.contains('products__img') || event.target.classList.contains('products__name') || event.target.classList.contains('products__price')) {
            // Нашли карточку товара
            const item = event.target.closest('.products__item')

            // Заносим данные с карточки в объект
            const cartObject = {
                'src': item.querySelector(".products__img").getAttribute('src'),
                'title': item.querySelector(".products__name").innerHTML,
                'price': item.querySelector(".products__price").innerHTML,
                'quantity': 1,
            }

            // Проверяем наличие товара в LocalStorage, перезаписываем количество
            if (localStorage.getItem(cartObject.title)) {
                let currentItem = JSON.parse(localStorage.getItem(cartObject.title))
                cartObject.quantity = +currentItem.quantity + 1;
            }


            localStorage.setItem(cartObject.title, JSON.stringify(cartObject))
            // Устанваливаем в LocalStorage счетчик при добавлении товара
            lolacCartCounter = +lolacCartCounter + 1;
            cartCounter.innerHTML = `${lolacCartCounter}`
            localStorage.setItem('cartCounter', lolacCartCounter)

            // Окно о добавлении товара
            document.querySelector('.information').classList.add('visible')
        }



        // for(let i=0; i<localStorage.length; i++) {
        //     let key = localStorage.key(i);
        //     let currentItem = localStorage.getItem(key)
        //     console.log(currentItem)
        // }

    });
});