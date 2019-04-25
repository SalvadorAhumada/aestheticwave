
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
         $("nav").addClass("nav-bg");
         $("nav").addClass("fadeIn");
         $("nav").removeClass("slideInDown");
         $(".menu_mobile").addClass("show-menu");
     } else {
         $("nav").removeClass("nav-bg");
         $("nav").removeClass("fadeIn");
         $(".menu_mobile").removeClass("show-menu");
    }
});

//Start AOS
AOS.init();

//menu mobil
function menuMobil() {
    var element = document.getElementById("menu_main");
    element.classList.toggle("show");
  } 
