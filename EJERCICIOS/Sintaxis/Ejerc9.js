'use strict;'

let flag = false;

let num1 = prompt('Introduzca el primer numero')
num1 = parseInt(num1)
let num2 = prompt('Introduzca el segundo numero')
num2 = parseInt(num2)

do{
console.log('       MENÚ DE OPERACIONES')
console.log('\n------------------------------')
console.log('1. Sumar.')
console.log('2. Multiplicación.')
console.log('3. Potencia.')
console.log('4. Cubo.')
console.log('5. Mayor.')
console.log('6. Salir')
console.log('------------------------------')
let op = prompt('Introduzca una opcion')
op = parseInt(op)

if(parseInt(op) == 1){
    console.log('Suma (' +  num1 + ' + ' + num2 + ')' + ': ' + suma(num1,num2))
}else if(op == 2){
    console.log('Multiplicación (' +  num1 + ' x ' + num2 + ')' + ': ' + multiplic(num1,num2))
}else if(op == 3){
    console.log('Potencia: ' + potencia(num1))
}else if(op == 4){
    console.log('Cubo: ' + cubo(num1))
}else if (op == 5){
    if(num1 == num2) console.log('Los dos numeros son iguales')
    else if(num1 > num2){
        console.log('Mayor: ' + num1)
    }else  console.log('Mayor: ' + num2)
}else flag = true;
}while(!flag);

function suma (a,b){
    return a + b
}

function multiplic (a,b){return (a * b);}

function potencia (base){return Math.pow(base,2);}

function cubo (base){return Math.pow(base, 3);}