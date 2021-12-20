'use strict;'

let listNotas = [4, 8, 2, 10, 3]
let media, tamanio

function metodMedia1(notas) {
    media = 0
    tamanio = (notas.length + 1)
    for (let not of notas) {
        media += not
    }
    media /= tamanio // Le sumo porque en los array la posicion empiezan por 0
    return media.toFixed(1) // el metodo toFixed, le pasas como parametro el numero de decimales que quieres que tenga el numero
}

console.log('Tus notas: [' + listNotas + ']')
console.log('Media: ' + metodMedia1(listNotas))

listNotas = [5, 10, 6, 9.5, 4]

function metodMedia2(notas, numDecim) {
    media = 0
    tamanio = (notas.length + 1)
    for (let not of notas) {
        media += not
    }
    media /= tamanio // Le sumo porque en los array la posicion empiezan por 0
    return media.toFixed(numDecim) // el metodo toFixed, le pasas como parametro el numero de decimales que quieres que tenga el numero
}
console.log('Tus notas: [' + listNotas + ']')
console.log('Media: ' + metodMedia2(listNotas, 2))