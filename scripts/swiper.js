function isMobile(){
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}
var swiper;
if(isMobile()){
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
    if(window.innerWidth > 768 && !isMobile()){    
      swiper.slideTo(0, 500);
      swiper.update();
      swiper.enabled = false;
    }
    else{
      swiper.enabled = true;
      swiper.update();
    }
  }
}

