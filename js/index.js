var menu_dropdown = document.getElementById("menu");

// open/close the menu when the user clicks on the button
function toggleMenu() {
    if (menu_dropdown.classList.contains('md:hidden')) {
        menu_dropdown.classList.remove('md:hidden');
    } else {
        menu_dropdown.classList.add('md:hidden');
    }
}

// close the menu when the user clicks outside of it 
window.onclick = function (event) {
    var dropdownWrapper = document.getElementById('dropdown-wrapper');
    if (!dropdownWrapper.contains(event.target) && !menu_dropdown.classList.contains('md:hidden') && !menu_dropdown.classList.contains('hidden')) {
        menu_dropdown.classList.add('md:hidden');
    }
}



//* activer anime on scroll 
//AOS.init();

const paralex_img = document.querySelector(".paralex")


      window.addEventListener("scroll", () => {
        updateImage();
      });

      function updateImage() {
        paralex_img.style.opacity = 1 - window.pageYOffset / 600;
        //slider_img.style.backgroundSize = 100 - window.pageYOffset / 12 + "%";
        //slider_img.style.backgroundPositionY = 100 - window.pageYOffset / 12 + "px"
      }
// MENU HAMBERGER CODE 

const nav_links = document.querySelector("#nav-links")
const menu = document.querySelector("#menu-hamberger")
menu.addEventListener("click",()=>{
    nav_links.classList.toggle("open-close-menu")
    menu.classList.toggle("is-active")
})


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

/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
}*/

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* MODAL CARD APPELLE   */ 

var a = setTimeout(() => {
  document.getElementById("overlay_modal").style.display = "block"; // ! doit remmtre a block en production 
}, 5000);

function chose_modal() {
  document.getElementById("overlay_modal").style.display = "none";
  clearTimeout(a)
}

/* CODE QUI FAIT DISPARAITRE LKE BACKGROUND LORSQUE ON SCROLL */ 

window.onscroll = function() {
  var numbre_scroll = 250 
  if (window.pageYOffset >= numbre_scroll) {
    document.getElementById("bg-social-media").style.backgroundColor = "rgba(0, 0, 0, 0.699)";
  }
  if (window.pageYOffset < numbre_scroll) {
    document.getElementById("bg-social-media").style.backgroundColor = "transparent";
  }
  // Get the button:
   let mybutton = document.getElementById("myBtn");
  // When the user scrolls down 20px from the top of the document, show the button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

