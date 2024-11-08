function interactSubmenu() {
    var table = document.getElementById("overview_lektionen");
    var image = document.getElementById("arrow_down");
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table";  // Tabelle sichtbar machen
        image.src = "images/pfeil hoch.png"
    } else {
        table.style.display = "none";   // Tabelle wieder verstecken
        image.src = "images/pfeil runter.png"
    }
}

function displayLernziele() {
    const lernziele = document.getElementById('lernziele-lektion1');
    
    // Toggle visibility
    if (lernziele.style.display === 'none' || lernziele.style.display === '') {
      lernziele.style.display = 'block';
    } else {
      lernziele.style.display = 'none';
    }
  }