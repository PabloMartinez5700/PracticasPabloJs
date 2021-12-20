'use strict;'

let encontrad = false
let numAzar =  Math.round(((Math.random() * 300) + 1))
let array = [];

function displayNoRep(){

        let aleatorio = parseInt(Math.random() * (299) + 1)
        if(!array.some((numero) => numero === aleatorio)){
            array.push(aleatorio);
        }
        console.log(console.time());
}

do{
    displayNoRep();
}while(array.length != 100)

console.log(array);