let menu1 = document.querySelector("#menu-btn");
let navbar1 = document.querySelector(".header1 .navbar1");

menu1.onclick = () =>{
    menu1.classList.toggle("fa-times");
    navbar1.classList.toggle("active");

}
window.onscroll = () =>{
    menu1.classList.remove("fa-times");
    navbar1.classList.remove("active");

}