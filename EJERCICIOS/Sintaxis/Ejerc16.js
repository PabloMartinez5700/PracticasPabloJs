'use strict;'

let num1 = 5
let num2 = 2

function tradicMultip (a, b) {
    if(isNaN(a) || isNaN(b)) alert("Error, deben ser numeros.")
    else alert("Resultado (" + a + " X " + b + "): " + (a*b))
}

tradicMultip(num1,num2) // Bien

num1 = 'Pablo'
num2 = 3

tradicMultip(num1,num2) // Mal