'use strict;'

let list = [52,7,2,28,3,52,23,2,81]

let contWhile = 0, contDoWhile = 0

do {
    console.log('Pintado con un Do While: ' + list[contDoWhile]);
    contDoWhile++; 
} while (contDoWhile != list.length)
console.log('--------------------------------------')

for(let i = 0; i < list.length; i++) {
    console.log('Pintado con un for: ' + list[i])
}
console.log('--------------------------------------')

list.forEach(num => {
    console.log('Pintado con un forEach:' + num)
});
console.log('--------------------------------------')

for (let i in list) {
    console.log('Pintado con un for in: ' + list[i])
}  
console.log('--------------------------------------')

for (let n of list) {
    console.log('Pintado con un for of: ' + n)
}
console.log('--------------------------------------')

while (contWhile != list.length) {
    console.log('Pintado con un While: ' + list[contWhile]);
    contWhile++
}
console.log('--------------------------------------')