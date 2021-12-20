'use strick;'

let num;
let arrayNotas = [];
let arrayNotasParse = clearItems(arrayNotas);


do{

    num = prompt("Introduce la nota (-1 para ver el resultado): ")
    arrayNotas = addItems(data, arrayNotas);



}while(data == '-1')

while (data != 'cancelar') {
    data = prompt('Introduce la nota (escribe cancelar para ver el resultado): ')
    arrayNotas = addItems(data, arrayNotas);
}
let arrayNotasParse = clearItems(arrayNotas);

console.log(`Array original sin modificar ${arrayNotas}`);
console.log(`Array solo con los números: ${arrayNotasParse}`);
console.log(`Primer suspenso: ${firstLowerNote(arrayNotasParse)}`);
console.log(`Notas aprobadas: ${getApproab(arrayNotasParse)}`);