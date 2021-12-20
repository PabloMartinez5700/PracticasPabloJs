'use strick;'

let cadena = prompt('Introduce una palabra')

if(cadena === underfined) alert('Dato no válido')
else getLetter(cadena)

function comprobarCadena(caden) {
    let cont = 0

    let listLetrCaden = [] // Aqui voy añadir cada letra de la cadena introducida por el usuario

    for(let letr of caden.length){
        listLetrCaden.push(letr)
    }

    let listLetrComprob = []

    for (let l of listLetrCaden.length) {
      cont = 0;
      if(listLetrComprob.findIndex( (letraRepetida ) => letraRepetida == l) == -1) {
        for (let letra of listLetrCaden) {
          if (letra == element) {
            cont++;
          }
        }
        listLetrComprob.push(element)
        console.log("Letra '"+ element + "': " + "Nº Repetida:" + cont)
      }
 }
}