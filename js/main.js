const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:1,
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

function toggle_visibility(id) {
    var e = document.getElementById(id);
    var btn = document.querySelector('.btn_show > span')
    if(e.style.display == 'block'){
        e.style.display = 'none';
        btn.innerHTML = 'Скрыть скелет';}
    else{
       e.style.display = 'block';
       btn.innerHTML = 'Показать скелет';}
}

AOS.init();