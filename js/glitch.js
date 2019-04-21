//change background color on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 350) {
        $("nav").addClass("nav-bg");
        $("header").addClass("fix");
    } else {
        $("nav").removeClass("nav-bg");
        $("header").removeClass("fix");
    }
});

//Start AOS
AOS.init();

//menu mobil
function menuMobil() {
    var element = document.getElementById("menu_main");
    element.classList.toggle("show");
  } 
