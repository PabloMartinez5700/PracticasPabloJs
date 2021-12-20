'use strict;'

let notas = [1,5.5,7,9,10]

notas.unshift(2.5)
notas.push(3.5)
notas.splice(1,2);

console.log('\nNotas Original')
console.log('-------------------------')
for(let not of notas) {console.log(not)}
console.log('-------------------------')

let notRef = notas

console.log('\nNotas Referencia')
console.log('-------------------------')
for(let not of notRef) {console.log(not)}
console.log('-------------------------')

let notCop = notas.slice()

console.log('\nNotas Copia')
console.log('-------------------------')
for(let not of notCop) {console.log(not)}
console.log('-------------------------')

/*
Cuando asignamos por referencia, si hacemos una modificacion o elimacion verdaderamente estamos afectando
al variable orginal porque en memoria a punta a la misma direccion. En cambio, si hacemos una copia apunta a otra direccion
en memoria y aunque sea lo mismo, en verdad son diferentes.
*/
