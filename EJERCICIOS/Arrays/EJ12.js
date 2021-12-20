'use strict;'

let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// Dias en variables independient
let [Lunes] = diasSemana

console.log(Lunes)

let [,Martes] = diasSemana

console.log(Martes)

let [,,Mierc] = diasSemana

console.log(Mierc)

let [,,,Juev] = diasSemana

console.log(Juev)

let [,,,,Viern] = diasSemana

console.log(Viern)

let [,,,,,Sabad] = diasSemana

console.log(Sabad)

let [,,,,,,Doming] = diasSemana
console.log(Doming)

console.log('======================================')

// Los cinco dias de la semana en variables y los dias del fin de semana en un array

let [L] = diasSemana
console.log(L)

let [,M] = diasSemana
console.log(M)

let [,,X] = diasSemana
console.log(X)

let [,,,J] = diasSemana
console.log(J)

let [,,,,V] = diasSemana
console.log(V)

let [,,,,,...finde] = diasSemana
console.log(finde)