var images = ["lenovo", "samsung", "apple", "viewsonic", "bosch", "hp", "acer", "sony",];

function createCard(imageName){ 
    var item = document.createElement("a");
    item.classList.add("swiper-slide");
    item.href = "#";

    var item__logo = document.createElement("img");
    item__logo.classList.add("swiper-slide__img");
    item__logo.src = "images/" + imageName + ".png";
    item__logo.alt = imageName;

    var item__arrow = document.createElement("div");
    item__arrow.classList.add("swiper-slide__arrow");

    item.appendChild(item__logo);
    item.appendChild(item__arrow);
    
    return item;
}

function fillCards(){
    var itemSet = document.querySelector(".swiper-wrapper");

    for (let i = 0; i < images.length; i++) {
        itemSet.appendChild(createCard(images[i]));        
    }    
}

window.onload = fillCards();