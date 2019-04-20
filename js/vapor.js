//change background color on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 350) {
        $("nav").addClass("nav-bg");
    } else {
        $("nav").removeClass("nav-bg");
    }
});

//Start AOS
AOS.init();


