'use strict;'

let sinParametr = (a = 5, b = 2) => Math.pow(a,b)

let unParametr = (a, b = 2) => Math.pow(a,b)

function dosParametr (a, b) {
    return Math.pow(a,b)
}

console.log('Funcion (sin parametros): ' + sinParametr())

console.log('Funcion (dos parametros): ' + dosParametr(2,4))

console.log('Funcion (un parametro): ' + unParametr(4))