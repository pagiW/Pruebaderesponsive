var header = document.getElementById("head");
var presi = document.getElementById("pressiona");
var state = 0;
var pantalla = window.matchMedia("screen and (max-width: 425px)");

pantalla.addEventListener('change', cambio);

function cambio(evento) {
    if (evento.matches == true) {
        presi.addEventListener('click', presionar);
        header.innerHTML += "<p id='par'></p>";
    }
    else {
        presi.removeEventListener('click', presionar);
    }
}
cambio(pantalla);

function presionar() {
    var p = document.getElementById("par");
    if (state == 0) {
        header.style.backgroundColor = "blue";
        p.innerHTML = "BLUE";
        state = 1;
    }
    else {
        header.style.backgroundColor = "green";
        p.innerHTML = "GREEN";
        state = 0;
    }
}
