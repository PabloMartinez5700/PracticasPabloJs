'use strict;'

let listCompra = ['Peras', 'Manzanas', 'Kiwis' ,'Plátanos', 'Mandarinas']

let manzan = listCompra.splice(1,1); // Pos 1 me borrar 1 elemento

console.log('\nBorrado Manzanas')
console.log('----------------------------')
listCompra.forEach(list => {
    console.log(list);
});
console.log('----------------------------')

let dat = listCompra.splice(3,0,'Naranjas','Sandía'); //Pos 3, no me borres nada (0) y me insertas los dos datos

console.log('\nAñadir Naranj y Sand')
console.log('----------------------------')
listCompra.forEach(list => {
    console.log(list);
});
console.log('----------------------------')

let nu = listCompra.splice(1,1,'Cerezas','Nisperos'); //Pos 1, me borrar 1 elemento y me insertas los dos datos

console.log('\nAñadir Cerez y Nisper')
console.log('----------------------------')
listCompra.forEach(list => {
    console.log(list);
});
console.log('----------------------------')