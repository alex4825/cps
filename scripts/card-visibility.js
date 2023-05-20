var showBtn = document.querySelector(".show-more");

showBtn.addEventListener("click", function(){
    var cards = document.querySelector(".swiper-wrapper");

    if(cards.classList.contains("hidden")){
        cards.classList.remove("hidden");
        showBtn.textContent = "Скрыть всё";
        showBtn.classList.add("show-more--hide");
    } else{
        cards.classList.add("hidden");
        showBtn.textContent = "Показать всё";
        showBtn.classList.remove("show-more--hide");
    }
});