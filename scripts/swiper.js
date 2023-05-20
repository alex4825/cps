function isMobile(){
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  || window.innerWidth < 768;
}
var swiper;
swiper = new Swiper('.swiper', {
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
  if(!isMobile()){    
    swiper.slideTo(0, 500);
    swiper.update();
    swiper.enabled = false;
  }
  else{
    swiper.enabled = true;
    swiper.update();
  }
}
