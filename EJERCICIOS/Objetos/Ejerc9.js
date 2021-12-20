'use strict;'

class Productos {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre
        this.categoria = categoria
        this.unidades = unidades
        this.precio = precio
    }

    importe(){
        return this.unidades * this.precio
    }

    getInfo(){
      return '\nProducto[' + ' Nombre (' + this.nombre.toUpperCase() + '), Categoria (' + this.categoria.toUpperCase() + 
      '), Unidades (' + this.unidades + '), Precio: (' + this.precio.toFixed(2) + ')].'
  }
}

let listProductos = []

listProductos [0] = (new Productos('TV LG', 'Televisores', 5,250))
listProductos [1] = (new Productos('Auriculares', 'Consolas', 2,50))
listProductos [2] = (new Productos('Cable HDMI', 'Consolas', 1,12))
listProductos [3] = (new Productos('PS4', 'Consolas', 1,250))
listProductos [4] = (new Productos('PS5', 'Consolas', 1,750))

listProductos.sort(function(p1, p2) {
  if (p1.nombre > p2.nombre)
    return 1
  if (p1.nombre < p2.nombre)
    return -1
  return 0
});   

console.log('\nORDENADOS POR NOMBRE')
console.log('===================================')
listProductos.forEach((product)=>{
    console.log(product)
});
console.log('===================================')
listProductos.sort(function(p1, p2) {
  if (p1.importe() > p2.importe())
    return 1
  if (p1.importe() < p2.importe())
    return -1
  return 0
});

console.log('\nORDENADOS POR IMPORTE')
console.log('===================================')
listProductos.forEach((product)=>{
    console.log('Nombre: ' + product.nombre + '(' + product.importe() + ')')
});
console.log('===================================')

let suma = 0;
for (let p of listProductos){
    suma += p.importe()
}
console.log('Importe Total: ' + suma.toFixed(2) + ' €') 

function lis1t(listProductos, numUnid) {
  let list = []

  for(let produc of listProductos){
    if(produc.unidades < numUnid){
      list.push(produc)
    }
  }
  return list
}

let numUnid = 4;

console.log('Productos encontrados con el Numero de Unidades menor de '  + numUnid + ': ' + lis1t(listProductos,4).length)

for(let p of lis1t(listProductos,numUnid)){
  console.log(p)
}

function escribirProd(listProductos) {
  return ' \nListado de productos: \n' +
  ' - Nombre: ' + listProductos[0].nombre + '\n' +
  ' - Categoria: ' + listProductos[0].categoria + '\n' +
  ' - Unidades: ' + listProductos[0].unidades + '\n' +
  ' - Precio: ' + listProductos[0].precio + '€' 
}

console.log(escribirProd(listProductos))