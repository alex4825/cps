var images = ["lenovo", "samsung", "apple", "viewsonic", "bosch", "hp", "acer", "sony",];

function createCard(imageName){ 
    var item = document.createElement("a");
    item.classList.add("card");
    item.href = "#";

    var item__logo = document.createElement("img");
    item.classList.add("card__logo");
    item__logo.src = "images/" + imageName + ".png";
    item__logo.alt = imageName;

    var item__arrow = document.createElement("div");
    item__arrow.classList.add("card__arrow");

    item.appendChild(item__logo);
    item.appendChild(item__arrow);
    
    return item;
}

function fillCards(){
    var itemSet = document.querySelector(".cards");

    for (let i = 0; i < images.length; i++) {
        itemSet.appendChild(createCard(images[i]));        
    }
    for (let i = 0; i < images.length; i++) {
        itemSet.appendChild(createCard(images[i]));        
    }
}

window.onload = fillCards();