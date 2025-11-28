//ESERCIZIO EXTRA 1

function rimuovere() {
  let twitter = document.querySelector(".blog-sidebar .p-4:nth-of-type(3) .list-unstyled li:nth-of-type(2)");
  if (twitter) {
    twitter.remove();
  }
}
rimuovere();

//ESERCIZIO EXTRA 2

let contLeggere = document.querySelectorAll(".stretched-link");

for (let i = 0; i < contLeggere.length; i++) {
  contLeggere[i].addEventListener("click", removePost);
}

function removePost(event) {
  event.target.parentNode.parentNode.remove();
}

//ESERCIZIO EXTRA 3

const autori = document.querySelectorAll(".blog-post-meta a");

for (let i = 0; i < autori.length; i++) {
  autori[i].addEventListener("mouseover", redAlert);
}

function redAlert(event) {
  alert(event.target.textContent);
}
