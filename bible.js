

function chapitre_now(nbr,nbr_f) {
  document.querySelector("#nbr_chap_now").setAttribute('data-nbr_chap_now', nbr);
  let dataValue = document.querySelector("#nbr_chap_now").getAttribute('data-nbr_chap_now');
  console.log("data-nbr_chap_now", dataValue)
  document.querySelector("#chap_numbre").innerHTML = nbr + 1
  d = nbr
  if (d + 1 >= nbr_f) {
    document.querySelector("#chap_suivant").style.display = "none"
    document.querySelector("#chap_precedent").style.display = "block"
  }else if(d - 1 <= 0){
    document.querySelector("#chap_suivant").style.display = "block"
    document.querySelector("#chap_precedent").style.display = "none"
  }
   else {
    document.querySelector("#chap_suivant").style.display = "block"
    document.querySelector("#chap_precedent").style.display = "block"

  }
}

function insert_number_of_chapitre(nbres) {
  let i
  let parentElement = document.querySelector("h2")
  let ul = document.createElement('ul');
  parentElement.after(parentElement, ul);
  ul.classList.add("chapitre_nombre")
  let chapitre_nombre_link = document.querySelectorAll(".chapitre_nombre_link")
  console.log(chapitre_nombre_link.length)
  for (i = 0; i < nbres; i++) {
    ul.innerHTML += `<li class="chapitre_nombre_link"><div onclick="to_chapitre(` + i + `) "> ` + (i + 1) + `</div></li>`
    if (i == nbres) {
      ul.innerHTML += `<li class="chapitre_nombre_link now"><div onclick="to_chapitre(` + i + `)">  ` + (i + 1) + `</div></li>`
    }
  }


}


function to_chapitre(nbrs) {
  let i;
  let ol = document.querySelectorAll("ol")
  for (i = 0; i < ol.length; i++) {
    ol[i].style.display = "none";
  }

  olIndex = nbrs;
  if (olIndex > ol.length) { olIndex = ol.length }
  if (olIndex < 0) { olIndex = 0 }
  console.log("to_chapitre",olIndex)
  chapitre_now(olIndex,ol.length)
  
  ol[olIndex].style.animation = "fade 3s linear infinite";
  ol[olIndex].style.display = "block";

}

function showThink() {
  let i;
  let ol = document.querySelectorAll("ol")

  for (i = 0; i < ol.length; i++) {
    let h1 = document.createElement("h1");
    ol[i].insertBefore(h1, ol[i].firstChild);
    h1.innerHTML = `Chapitre  ` + (i + 1) + `</span>`
    ol[i].style.display = "none";

  }
  if (olIndex > ol.length) { olIndex = ol.length }
  if (olIndex < 0) { olIndex = 0 }
  olIndex++;
  console.log(olIndex)
  chapitre_now(olIndex-1,ol.length)
  
  ol[olIndex - 1].style.animation = "fade 3s linear infinite";
  ol[olIndex - 1].style.display = "block";
  insert_number_of_chapitre(ol.length)

  //setTimeout(showThink, 6000); // Change image every 6 seconds
}
let olIndex = 0;
showThink();
function hr_none() {
  let i;
  let hr = document.querySelectorAll("hr")
  for (i = 0; i < hr.length; i++) {
    hr[i].style.display = "none";
  }
}
hr_none()
function p_none() {
  let i;
  let p = document.querySelectorAll("p")
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
}
p_none()

document.querySelector("#chap_suivant").addEventListener("click", function (event) {
  let dataValue = document.querySelector("#nbr_chap_now").getAttribute('data-nbr_chap_now');
  let d = Number(dataValue) + 1
  let nbr_final = document.querySelectorAll("ol").length
  console.log("nbre_final",nbr_final)
  console.log("d",d)
  if (d+1 >= nbr_final) {
    document.querySelector("#chap_suivant").style.display = "none"
    document.querySelector("#chap_precedent").style.display = "block"
    d = nbr_final
    to_chapitre(d)
    window.scrollTo(0, 400);
  } else {
    document.querySelector("#chap_suivant").style.display = "block"
    document.querySelector("#chap_precedent").style.display = "block"
    to_chapitre(d)
    window.scrollTo(0, 400);
  }

});
document.querySelector("#chap_precedent").addEventListener("click", function (event) {
  let dataValue = document.querySelector("#nbr_chap_now").getAttribute('data-nbr_chap_now');
  let d = Number(dataValue) - 1
  if (d < 0 || d == 0) {
    document.querySelector("#chap_precedent").style.display = "none"
    document.querySelector("#chap_suivant").style.display = "block"
    d = 0
    to_chapitre(d)
  } else {
    document.querySelector("#chap_suivant").style.display = "block"
    document.querySelector("#chap_precedent").style.display = "block"
    to_chapitre(d)
    window.scrollTo(0, 400);
  }
});



$('ol li').click(function () {
  // code to execute when the element is clicked
  document.execCommand('copy');
});
