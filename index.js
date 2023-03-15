
// CAROUSEL FUNCTIONS *******************************

let cardCarousel = document.querySelector(".cardCarousel");
let frame = document.querySelector(".frame");
let card = document.querySelectorAll(".card");
let prevButton = document.querySelector(".prevBtn");
let nextButton = document.querySelector(".nextBtn");


let count = 1;
let slideDistance = (card[0].getBoundingClientRect().left - card[1].getBoundingClientRect().left);

nextButton.addEventListener("click", ()=> {
    if(Math.floor(card[0].clientWidth / cardCarousel.clientWidth) === 1) {
        if(count === card.length) return;
    }

    if(count === card.length-(Math.floor(cardCarousel.clientWidth / card[0].clientWidth) - 1)) return;

    
    frame.style.transition = "transform 0.4s ease-in-out";
    frame.style.transform = `translateX(${count * slideDistance}px)`;
    count ++;
    console.log(count);
})

prevButton.addEventListener("click", ()=> {
    if(count === 1) return;

    count --;
    frame.style.transition = "transform 0.4s ease-in-out";
    frame.style.transform = `translateX(${(count-1) * slideDistance}px)`;
    console.log(count);
})


// ACCORDION FUNCTIONS *******************************

let accordionButton1 = document.querySelector(".accordionButton1");
let accordionContent1 = document.querySelector(".accordionContent-1");
let accordionTitle1 = document.querySelector(".accordionTitle-1");

accordionButton1.addEventListener("click", ()=> {
    accordionContent1.classList.toggle("accordion-1-active");
    accordionTitle1.classList.toggle("titleActive-1");
    accordionButton1.classList.toggle("accordionBtnActive")
})


let accordionButton2 = document.querySelector(".accordionButton2");
let accordionContent2 = document.querySelector(".accordionContent-2");
let accordionTitle2 = document.querySelector(".accordionTitle-2");

accordionButton2.addEventListener("click", ()=> {
    accordionContent2.classList.toggle("accordion-2-active");
    accordionTitle2.classList.toggle("titleActive");
    accordionButton2.classList.toggle("accordionBtnActive")
})


let accordionButton3 = document.querySelector(".accordionButton3");
let accordionContent3 = document.querySelector(".accordionContent-3");
let accordionTitle3 = document.querySelector(".accordionTitle-3");

accordionButton3.addEventListener("click", ()=> {
    accordionContent3.classList.toggle("accordion-3-active");
    accordionTitle3.classList.toggle("titleActive");
    accordionButton3.classList.toggle("accordionBtnActive")
})

