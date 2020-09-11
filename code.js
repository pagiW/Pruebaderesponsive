var button = document.getElementById("boton");
var option = document.getElementById("op");
var header = document.getElementById("head");
var main = document.getElementById("event");
var pantalla = window.matchMedia("screen and (max-width: 425px)");
var state = 0;

pantalla.addListener(cambio);

function cambio(evento) {
    if (evento.matches) {
        header.style.background = "blue";
    }
    else {
        header.style.background = "green";
    }
}