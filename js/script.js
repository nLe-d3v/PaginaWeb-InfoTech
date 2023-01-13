document.querySelector(".bars__menu").addEventListener("click" , menu);

var line1 = document.querySelector(".line1_bars-menu");
var line2 = document.querySelector(".line2_bars-menu");
var line3 = document.querySelector(".line3_bars-menu");
var container_menu = document.querySelector(".menu");

function menu(){
    line1.classList.toggle("activeline_bar1");
    line2.classList.toggle("activeline_bar2");
    line3.classList.toggle("activeline_bar3");

    container_menu.classList.toggle("menu_active");
}


