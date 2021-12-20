'use strict;'

let valor = 10 + 'Hola';
valor = parseInt(valor);
console.log(valor);

let valor2 = 4.5
valor2 = parseFloat(4.5);
console.log(4.5);

console.log (isNaN(valor) ? 'No es un numero' : 'Es un numero');

console.log(isFinite(valor2) ? 'Si' : 'No');

let valor3 = true;
console.log(String(valor3));

let valor4 = 0;
console.log(Boolean(valor4))