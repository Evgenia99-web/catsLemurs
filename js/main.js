const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:2,
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var rellax = new Rellax('.food_block_paw');

if(document.body.clientWidth < 576){
    rellax.destroy();
}

  AOS.init();