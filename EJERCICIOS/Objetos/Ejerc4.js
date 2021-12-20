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

class Televisores extends Productos {
    constructor(nombre, tamanio) {
        super(nombre)
        this.tamanio = tamanio
      }

    getInfo1() {
        return 'Tamanio: ' + this.tamanio + ' del producto ' + this.nombre + '.'
    }
}

let p1 = new Televisores('TV LG', '40 pulgadas')
console.log(p1.getInfo1()) 