'use strict;'

// Rest
function suma(...num) {
    return num.reduce((sum, num) => {
      return sum + num;
    });
}
console.log(suma(1, 2, 3));

// Spread
let num = [2]
let potenci = Math.pow(...num,2)
console.log(potenci);