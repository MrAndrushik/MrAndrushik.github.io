document.addEventListener("DOMContentLoaded", function() {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".menu");
    let body = document.querySelector("body");

    burger.addEventListener("click", function() {
        event.preventDefault();
        burger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active");
        body.classList.toggle("body_fixed");

        document.addEventListener("click", function(event){
            if (event.target.classList.contains("menu__link")) {
                burger.classList.remove("burger_active");
                menu.classList.remove("menu_active");
                body.classList.remove("body_fixed");
            }
        })
    });
});