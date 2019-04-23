//change background color on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $("nav").addClass("nav-bg");
    } else {
        $("nav").removeClass("nav-bg");
    }
});

//Start AOS
AOS.init();

//menu mobil
function menuMobil() {
    var element = document.getElementById("menu_main");
    element.classList.toggle("show");
  } 

