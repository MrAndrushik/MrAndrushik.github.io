$('.owl-carousel').owlCarousel({
  loop:true,
  margin:36,
  dots: false,
  responsiveClass:true,
  navText: ['<img src="/assets/img/prev-btn.svg">','<img src="/assets/img/next-btn.svg">'],
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      992:{
          items:4,
          nav:true,
          loop:false
      }
  }
})