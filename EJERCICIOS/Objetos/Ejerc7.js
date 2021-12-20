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

    getInfo() {
        return '\n' + this.nombre + '(' + this.categoria + '): ' + this.unidades + ' * ' +  this.precio + '€ = '
    }
}

let listProductos = []

listProductos [0] = (new Productos('TV LG', 'Televisores', 5,250))
listProductos [1] = (new Productos('Auriculares', 'Consolas', 2,50))
listProductos [2] = (new Productos('Cable HDMI', 'Consolas', 1,12))

listProductos.sort(function(p1, p2) {
    if (p1.nombre > p2.nombre)
      return 1
    if (p1.nombre < p2.nombre)
      return -1
    return 0
});   


listProductos.forEach((product)=>{
    console.log(product)
});
