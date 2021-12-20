'use strict;'

let num1,num2,bas

// SUMA 
num1 = 5 
num2 = 4

function tradicionSum(num1, num2) {return (num1 + num2)}
console.log('Función Tradicional (' +  num1 + ' + ' + num2 + ')' + ': ' + tradicionSum(num1,num2))

let anonimaSum = function (num1, num2) {return (num1, num2)}
console.log('Función Anónima (' +  num1 + ' + ' + num2 + ')' + ': ' + anonimaSum(num1,num2))

let arrowSum = (num1, num2) => (num1 + num2)
console.log('Función Arrow (' +  num1 + ' + ' + num2 + ')' + ': ' + arrowSum(num1,num2))
  
// MULTIPLICACION
num1 = 2
num2 = 2

function tradicMultip (num1, num2) { return (num1 * num2)}
console.log('Función Tradicional (' +  num1 + ' X ' + num2 + ')' + ': ' + tradicMultip(num1,num2))

let anonimMultip = function (num1, num2) {return (num1 * num2)}
console.log('Función Anónima (' +  num1 + ' X ' + num2 + ')' + ': ' + anonimMultip(num1,num2))

let arrowMultip = (num1, num2) => (num1 * num2)
console.log('Función Arrow (' +  num1 + ' X ' + num2 + ')' + ': ' + arrowMultip(num1,num2))
  
// POTENCIA
bas = 6

function tradicPotenc (base) {return Math.pow(base,2)}
console.log('Función Tradicional (' +  bas + ' ^ ' + 2 + ')' + ': ' + tradicPotenc(bas))

let anonimPotenc = function (base) {return Math.pow(base,2)}
console.log('Función Anónima (' +  bas + ' ^ ' + 2 + ')' + ': ' + anonimPotenc(bas))

let arrowPotenc = (base) => Math.pow(base,2)
console.log('Función Arrow (' +  bas + ' ^ ' + 2 + ')' + ': ' + arrowPotenc(bas))


// CUBO 
bas = 8
  
function tradicCubo(base) {return Math.pow(base, 3)}
console.log('Función Tradicional (' +  bas + ' ^ ' + 3 + ')' + ': ' + tradicCubo(bas))

let anonimCubo = function (base) {return Math.pow(base, 3)}
console.log('Función Anónima (' +  bas + ' ^ ' + 3 + ')' + ': ' + anonimCubo(bas))

let arrowCubo = (base) => Math.pow(base, 3)
console.log('Función Arrow (' +  bas + ' ^ ' + 3 + ')' + ': ' + arrowCubo(bas))
  
  
// MAYOR DOS NUMEROS 
num1 = 1
num2 = 2

function tradicMayor(a, b) {
  if(a > b) return console.log('Función Tradicional: El mayor es ' + a )
  else return console.log('Función Tradicional: El mayor es ' + b)
}
tradicMayor(num1, num2)

let anonimMayor = function(a, b) { 
  if(a > b) return console.log('Función Anónima: El mayor es ' + a )
  else return console.log('Función Anónima: El mayor es ' + b)
}
anonimMayor(num1, num2) 

let arrowMayor = (a, b) => (a > b) ? a : b
console.log('Función Arrow: El mayor es ' + arrowMayor (num1, num2))