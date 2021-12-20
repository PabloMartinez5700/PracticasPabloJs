'use strict;'

let timeOut = setTimeout(function() {
	alert('Error, con setTimeout cada 2 segundos.')
}, 2000);
clearTimeout(timeOut)

let interval = setInterval(function() {
    alert('Error, con setInterval')
}, 2000);

let i = 1
let interval1 = setInterval(function() {
    alert('Error, con setInterval cada 3 segundo, Ejecucion nº ' + i++)
    if (i == 10){
        clearInterval(interval1)
        alert('Fin de la Ejecución')
    }
}, 3000);

