'use strict;'

let listNotas = [4, 8, 2, 10, 3]

let media, tamanio, result, cont

function funcMediaForIn(notas) {
     media = 0
     tamanio = (notas.length + 1)

    for (let not in notas) {
        media += notas[not]
    }
    media /= tamanio
    return media.toFixed(2)
}

console.log('Tus notas: [' + listNotas + ']')
console.log('Media: ' + funcMediaForIn(listNotas) + '\n')

function funcMediaForOf(notas) {
    media = 0
    tamanio = (notas.length + 1)

   for (let not of notas) {
       media += not
   }
   media /= tamanio
   return media.toFixed(2)
}
console.log('Tus notas: [' + listNotas + ']')
console.log('Media: ' + funcMediaForOf(listNotas) + '\n')

function funcMediaFor(notas) {
    media = 0
    tamanio = (notas.length + 1)

    for (let i = 0; i < notas.length; i++) {
        media += notas[i]
    }

   media /= tamanio
   return media.toFixed(2)
}
console.log('Tus notas: [' + listNotas + ']')
console.log('Media: ' + funcMediaForOf(listNotas) + '\n')