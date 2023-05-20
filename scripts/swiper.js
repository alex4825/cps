const swiper = new Swiper('.swiper-object .swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,   
  },  
});

window.addEventListener('resize', function(event) {
  changeSwiper();  
}, true);

window.addEventListener('load', function(event) {
  changeSwiper();
}, true);

function changeSwiper(){
  if(window.innerWidth > 768){    
    swiper.slideTo(0, 500);
    swiper.update();
    swiper.enabled = false;
  }
  else{
    swiper.enabled = true;
    swiper.update();
  }
}