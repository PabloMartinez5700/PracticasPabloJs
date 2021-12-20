'use strict;'

let tamanio, media

let notas = [3,8,5,2,4.5,6,1,7.8,9.5,10]
console.log('\nNotas')
console.log('-------------------------')
for(let n of notas){
    console.log(n)
}
console.log('-------------------------')

let maxNota = notas.reduce((max,nota) => nota > max ? nota : max); 
console.log('Máxima nota: ' + maxNota)
console.log('-------------------------')

let minNota = notas.reduce((min,nota) => nota < min ? nota : min); 
console.log('Mínima nota: ' + minNota)
console.log('-------------------------')

let sumaNotas = notas.reduce((suma,nota) => suma += nota); //Obtengo la suma

tamanio = notas.length; //Obtengo el tamaño del array de notas

media = (sumaNotas / tamanio)

console.log('Media: ' + media)
console.log('-------------------------')


let encuentr5 = notas.some(nota => nota == 5);

console.log((encuentr5) ? '\nHemos encontrado una nota con un 5' : '\nError, no hemos encontrado ninguna nota con un 5')

// Tambien se puede hacer con el metodo incluid

let newEncuentr5 = notas.includes(5);
console.log((newEncuentr5) ? '\nHemos encontrado una nota con un 5' : '\nError, no hemos encontrado ninguna nota con un 5')

let listNotasRestadas = Array.from(notas, nota => (nota - 1));
console.log('\nNotas Restadas')
console.log('-------------------------')
for(let n of listNotasRestadas){
    console.log(n)
}
console.log('-------------------------')

let suspensas = notas.slice()

for(let not of suspensas){
    if (not < 5){
        not += 1
        console.log(not)
    }
}