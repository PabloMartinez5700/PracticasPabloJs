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

console.log('--------------------------')
meses.forEach(mes => {
    console.log(mes);
});
console.log('--------------------------')