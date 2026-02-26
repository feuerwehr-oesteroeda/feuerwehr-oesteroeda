<script>
// =============================
// EINSÄTZE LADEN
// =============================

fetch("einsatz/einsaetze.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("einsatzListe");

    // Nach Datum sortieren (neueste zuerst)
    data.sort((a, b) => {
        const dateA = new Date(a.datum.split(".").reverse().join("-"));
        const dateB = new Date(b.datum.split(".").reverse().join("-"));
        return dateB - dateA;
    });

    // Karten erzeugen
    data.forEach(einsatz => {
      container.innerHTML += `
        <div class="card">
          <h3>🔥 ${einsatz.titel}</h3>
          <p><strong>Datum:</strong> ${einsatz.datum}</p>
          <p><strong>Stichwort:</strong> ${einsatz.stichwort}</p>
          <a class="button" href="${einsatz.link}">Zum Einsatzbericht</a>
        </div>
      `;
    });

  })
  .catch(error => {
      console.error("Fehler beim Laden der Einsätze:", error);
  });


// =============================
// LIGHTBOX
// =============================

document.addEventListener("click", function(e) {
    if(e.target.classList.contains("zoom-img")) {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = e.target.src;
    }
});

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


// =============================
// MOBILE MENÜ
// =============================

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}


// =============================
// DARK / LIGHT MODE
// =============================

function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
}
</script>
