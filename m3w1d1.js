function rimuovere() {
  let twitter = document.querySelector(".blog-sidebar .p-4:nth-of-type(3) .list-unstyled li:nth-of-type(2)");
  if (twitter) {
    twitter.remove();
  }
}
rimuovere();

function remove() {
  let contLeggere = document.querySelector(".jumbotron a");
  if (contLeggere) {
    contLeggere.addEventListener("click", function (e) {
      e.preventDefault("a");
      let genitore = e.target.closest(".jumbotron");
      if (genitore) {
        genitore.remove();
      }
    });
  }
}
remove();

function gestisciAutori() {
  let autori = document.querySelectorAll(".blog-post-meta a");

  for (let i = 0; i < autori.length; i++) {
    autori[i].addEventListener("mouseover", function (e) {
      let nomeAutore = e.target.textContent;
      alert("Autore del post : " + nomeAutore);
    });
  }
}
gestisciAutori();
