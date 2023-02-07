const nav_links = document.querySelector("#nav-links")
const menu = document.querySelector("#menu-hamberger")
menu.addEventListener("click",()=>{
    nav_links.classList.toggle("open-close-menu")
    menu.classList.toggle("is-active")
})

//* code slider 

const slider_img = document.querySelector("#slider")

var image = new Array (
    "img/img- (1).jpg",
    "img/img- (2).jpg",
    "img/img- (3).jpg",
    "img/img- (4).jpg",
    "img/img- (5).jpg",
    "img/img- (6).jpg",
    "img/img- (7).jpg",
    
)

var len = image.length 
var i = 0
function slider() {
    if(i > len-1){
        i = 0
    }
    
    slider_img.style.backgroundImage = "url('" + image[i] + "')";
    slider_img.style.animation = "zoom 36s linear infinite";
    i++
    setTimeout('slider()',3000);
}
 slider()
/* change de theme pense du jour etc */ 

let slideIndex = 0;
showThink();

function showThink() {
  let i;
  let slides = document.getElementsByClassName("think");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.animation = "fade 3s linear infinite";
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(showThink, 6000); // Change image every 2 seconds
}

/* BARRE DE RECHCHER CODE */ 

function on() {
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = 'hidden';
  
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = 'auto';
}

/* RECHERCHER RECUPERE UN INPUT EST AFFICHER */ 
document.querySelector("#input-saerch").addEventListener("keyup", function(event) {
  event.preventDefault();
  var myInput = document.querySelector("#input-saerch").value;
  var text_see_search  = document.querySelector("#text-see-search")
  text_see_search.innerHTML ='Nous rechcherchons'
  document.querySelector("#text-search").innerHTML ='"'+ myInput+'"';
  document.querySelector("#loader").style.display = "block";
  if(myInput == ""){
    document.querySelector("#text-search").innerHTML ='';
    text_see_search.innerHTML ='Ecrivez quelque chose'
    document.querySelector("#loader").style.display = "none";
  }
  
});

/*document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  var myInput = document.querySelector("#myInput").value;
  document.querySelector("#myDiv").innerHTML = myInput;
});*/

//* bouton vers le haut 

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

