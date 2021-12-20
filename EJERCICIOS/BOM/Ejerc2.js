'use strick'

function dibujarReloj(){

let fecha = new Date();

let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

 hora = (hora < 10) ? "0" + hora : hora;
 minutos = (minutos < 10) ? "0" + minutos : minutos;
 segundos = (segundos < 10) ? "0" + segundos : segundos;

let pintar = document.createTextNode(`${hora}:${minutos}:${segundos}`);

let div = document.querySelector(".center");
let h1 = document.createElement("h1");
h1.appendChild(pintar);

div.appendChild(h1);

setInterval(pintar, 2000);
}

dibujarReloj();