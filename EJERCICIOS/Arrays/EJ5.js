'use strict;'

let notSinOrden = [4, 8, 3, 10, 5];

console.log('\nNo Ordena')
console.log('-------------------------')
notSinOrden.forEach(not => {
    console.log(not);
});
console.log('-------------------------')

let copia = notSinOrden.splice()

let ordenada = copia.sort((num1, num2) => (parseInt(num1) < parseInt(num2)) ? -1 : 1);

console.log('\nOrdena')
console.log('-------------------------')

for (let v of ordenada) {
    console.log(v);
}
console.log('-------------------------')
