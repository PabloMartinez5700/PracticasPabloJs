'use strict;'

let palabras = ['bienvenido', 'hola', 'guapo','adios','pablo','feo'];

console.log('\nLista DesOrdenada')
console.log('----------------------------')

for(let l of palabras){
  console.log(l);
}

let ordenada = palabras.sort(function(a,b) {
  a = a.charCodeAt(a.length - 1); //Obtengo la ultima letra y le resto - 1 porque empieza la posicion por 0
  b = b.charCodeAt(b.length - 1); //Obtengo la ultima letra y le resto - 1 porque empieza la posicion por 0
    if (a > b)return 1;
    else if (a < b) return -1;
    return 0;
}); 

console.log('\nLista Ordenada')
console.log('----------------------------')
for(let l of ordenada){
  console.log(l);
}