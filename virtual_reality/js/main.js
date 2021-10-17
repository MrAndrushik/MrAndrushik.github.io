var slide_wrp     = ".side-menu-wrapper"; //обертка меню
var open_button   = ".menu-open"; //кнопка "открыть меню"
var close_button   = ".menu-close"; //кнопка "закрыть"
var overlay     = ".menu-overlay"; //затемнение фона
var menu_item     = ".menu-item"; //элемент меню
//Initial menu position
$(slide_wrp).hide().css( {"right": -$(slide_wrp).outerWidth()+'px'}).delay(50).queue(function(){$(slide_wrp).show()}); 
$(open_button).click(function(e){ //при нажатии на кнопку "Открыть меню"
  e.preventDefault();
  $(slide_wrp).css( {"right": "0px"}); //перемещаем меню вправо или изменить "right" на "left" для появления меню с левой стороны
  setTimeout(function(){
    $(slide_wrp).addClass('active'); //добавляем класс "active"
  },50);
  $(overlay).css({"opacity":"1", "width":"100%"});
});
$(close_button).click(function(e){ //при нажатии на кнопку "закрыть"
  e.preventDefault();
  $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}); //прячем меню вправо или изменить "right" на "left" если меню слева
  setTimeout(function(){
    $(slide_wrp).removeClass('active'); // убираем класс "active"
  },50);
  $(overlay).css({"opacity":"0", "width":"0"});
});

$(menu_item).click(function(e){ //при нажатии на кнопку "закрыть"
  // e.preventDefault();
  $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}); //прячем меню вправо или изменить "right" на "left" если меню слева
  setTimeout(function(){
    $(slide_wrp).removeClass('active'); // убираем класс "active"
  },50);
  $(overlay).css({"opacity":"0", "width":"0"});
});

$(document).on('click', function(e) { //Прячем меню при клике вне обертки
  if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")){ // проверяем состояние меню
    $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}).removeClass('active');
    $(overlay).css({"opacity":"0", "width":"0"});
  }
});