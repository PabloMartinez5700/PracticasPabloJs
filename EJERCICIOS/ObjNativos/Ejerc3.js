'use strict;'

function num(tamanio) {

let encontrad = false
let numAzar =  Math.round(((Math.random() * 300) + 1))

    do{

        for(let i = 0; i < tamanio; i++){
            let azar = Math.round(((Math.random() * 300) + 1))
            if( azar === numAzar) encontrad = true
            else encontrad = false
    
            console.log('Nº ' + (i + 1) + ' --> ' + azar)
        }
    }while(encontrad)    
}

console.time(num(100));

console.timeEnd();