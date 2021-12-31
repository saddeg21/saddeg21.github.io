let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");

}
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

}

let slides = document.querySelectorAll(".slide-container");
let index = 0 ;

//next function

function next(){
    slides[index].classList.remove("active");
    index= (index+1) % slides.length;
    slides[index].classList.add("active");
}

//prev function

function prev(){
    slides[index].classList.remove("active");
    index= (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

//autoplay 
setInterval(next, 15000)