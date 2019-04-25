
/*cargar con ajax las paginas*/   
$(document).ready(function(){
var url = "/2.html";
var urlTwo = "/css.html";
$("#one").on("click", function() {
setTimeout(() => $('body').load(url), 1000);
});
$("#css").on("click", function() {
setTimeout(() => $('body').load(urlTwo), 2200);
});
});

/* las animaciones fadeout al hacer click*/
function fadeOut(){
var element = document.getElementById("navbar");
var elementTwo = document.getElementById("sidemenu");
var elementThree = document.getElementById("main-content");
element.classList.add("slideOutUp");
element.classList.remove("delay-1s");
elementTwo.classList.add("slideOutLeft");
elementThree.classList.add("fadeOut");
}

/*adding and removing classes*/
function addClass()
{var element = document.getElementById("black");
element.classList.add("show");
}

function addClassTwo()
{var element = document.getElementById("yellow");
element.classList.add("hidden");
}

function refresh()
{var element = document.getElementById("black");
var elementtwo = document.getElementById("yellow");
element.classList.remove("show");
elementtwo.classList.remove("hidden");
}

/*Toggle classes*/
function toggleClass()
{var element = document.getElementById("lights");
element.classList.toggle("lights");
}

/*Background color, para modificar el BODY getElementById NO FUNCIONA*/
function colorJSCSS() {
var element = document.body;
element.classList.add("colorJSCSS");
element.classList.remove("colorCSS");
}

/*time delays*/
function blocks(){
var element = document.getElementById("block");
element.classList.add("hide-block");
}

function blocksTwo(){
var element = document.getElementById("blockTwo");
element.classList.add("hide-block");
}

function blocksThree(){
var element = document.getElementById("blockThree");
element.classList.add("hide-block");
}

function refreshTwo()
{var element = document.getElementById("block");
var elementTwo = document.getElementById("blockTwo");
var elementThree = document.getElementById("blockThree");
element.classList.remove("hide-block");
elementTwo.classList.remove("hide-block");
elementThree.classList.remove("hide-block");
}

/*burger menu*/

function menu(){
var element = document.getElementById("sidemenu");
element.classList.toggle("aside-show");
}