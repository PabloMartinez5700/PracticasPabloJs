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

    getInfo() {
        return '(' + this.categoria + '), ' + ' Nombre: ' + this.nombre
    }
}

let p1 = new Productos('TV Samsung', 'Televisores', 5,120)
console.log(p1.getInfo())     