var showBtn = document.querySelector(".show-more");

showBtn.addEventListener("click", function(){
    var cards = document.querySelector(".cards");

    if(cards.classList.contains("cards--hidden")){
        cards.classList.remove("cards--hidden");
        showBtn.textContent = "Скрыть всё";
        showBtn.classList.add("show-more--hide");
    } else{
        cards.classList.add("cards--hidden");
        showBtn.textContent = "Показать всё";
        showBtn.classList.remove("show-more--hide");
    }
});

