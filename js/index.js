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