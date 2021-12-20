'use strict;'


let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

console.log('\nDias de la Semana')
console.log('-------------------------')
for(let d of dias){console.log(d);}
console.log('-------------------------')

let empiezByM = dias.filter((dia) => dia.charAt() == 'M'); //Devuelve los dias que empiecen por la letra M
console.log('\nDias que empiecen por la M')
console.log('-------------------------')
for(let m of empiezByM){
    console.log(m);
}
console.log('-------------------------')

let dayM = dias.find((dia) => dia.charAt() == 'M'); //Devuelve un dia de la semana que empieze por M (Solo devuleve el primero que cumple la condicion)
console.log('\nDias que empiecen por la M')
console.log('-------------------------')
console.log(dayM);
console.log('-------------------------')

let posDiaConM = dias.findIndex((dia) => dia.charAt() == 'M'); //Devuelve posicion, donde encuentre la letra M
console.log('\nPrimer dia que empiece por M')
console.log('Posicion: ' + posDiaConM);
console.log('-------------------------')
let posDay = dias[posDiaConM];
for(let m of posDay){console.log(m);}
console.log('-------------------------')

let dayS = dias.some((dia) => dia.charAt() == 'S'); //Devuelve un valor boleano si encuentra algun dia empiezan por S

console.log((dayS) ? '\nHemos encontrado un dia que empieza por S' + '\n-----------------------------------------' : '\nNo hemos encontrado ningun dia que empiecen por S' + '\n-----------------------------------------')

let dayfinS = dias.every((dia) => dia.charAt() == 'S'); //Devuelve un valor boleano si todos cumple la condicion

console.log((dayfinS) ? '\nHemos encontrado un dia que termina por S' + '\n-----------------------------------------' : '\nNo hemos encontrado ningun dia que termine por S' + '\n-----------------------------------------')

let dayMasyusc = dias.map((dia) => dia.toUpperCase());  //Devuelve una lista con los dias de la semana en Mayuscula
console.log('\nDias en Mayuscula')
console.log('-------------------------')
for(let m of dayMasyusc){
    console.log(m);
}
console.log('-------------------------')

let diasMinusculas = Array.from(dias, dia => dia.toLowerCase()); //Devuelve una lista con los dias de la semana en Miniscula
console.log('\nDias en Miniscula')
console.log('-------------------------')
for(let m of diasMinusculas){
    console.log(m);
}
console.log('-------------------------')

let daySeparadByCom = dias.reduce((total, dia) => total += `, ${dia}`) // Devuelve la lista con los dias separados por guiones
console.log('\nDias separados con ,')
console.log('-----------------------------------------------')
console.log(daySeparadByCom)
console.log('-----------------------------------------------')