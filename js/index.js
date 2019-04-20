//Load animations
function Load() {
    var list = document.querySelectorAll("div.options_index > a");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add('animated', 'rotateOut');
    }
    var title = document.querySelector('h1');
    var subtitle = document.querySelector('h2');
    title.classList.add('animated');
    title.classList.add('fadeOut');
    subtitle.classList.add('animated');
    subtitle.classList.add('fadeOut');
}

// Change background color
function background() {
    var bg = document.getElementById('index_bg');
    var footer = document.querySelector('footer');
    var hide = document.getElementById('options');
    bg.classList.add('index_container_bg');
    bg.classList.add('animated');
    bg.classList.add('fadeIn');
    footer.classList.add('animated');
    footer.classList.add('slideOutDown');
    hide.classList.add('hide');
}

//Delay loading anchors in all site
$(function(){
    $("a").click(function(evt){
        var link = $(this).attr("href");
        evt.preventDefault(); 
        setTimeout(function() {
            window.location.href = link;
        }, 1800);
    });
});

//Preload

$(document).ready(function() {
    $(window).on("load", function() {
    let preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });
    });