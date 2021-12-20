'use strict;'

let meses = ['Junio'];

meses.push('Julio');
meses.push('Agosto');
meses.push('Septiembre');
meses.push('Octubre');
meses.push('Noviembre');
meses.push('Diciembre');


meses.unshift('Mayo');
meses.unshift('Abril');
meses.unshift('Marzo');
meses.unshift('Febrero');
meses.unshift('Enero');

let copiaMes = meses.slice(); //Hago una copia que apunte a otro espacio de memoria

console.log('\nORIGINAL')
console.log('-------------------------------------')
copiaMes.forEach(mes => {
    console.log(mes);
});
console.log('-------------------------------------')


console.log('\nBORRADA')
console.log('-------------------------------------')

let jul = copiaMes.pop();
let agost = copiaMes.pop();
let septiembr = copiaMes.pop();
let octumbr = copiaMes.pop();
let noviembr = copiaMes.pop();
let diciemb = copiaMes.pop();

let may = copiaMes.shift();
let abr = copiaMes.shift();
let marz = copiaMes.shift();
let febr = copiaMes.shift();
let ener = copiaMes.shift();


copiaMes.forEach(mes => {
    console.log(mes);
});
console.log('-------------------------------------')