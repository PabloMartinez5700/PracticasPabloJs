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

    static getCategorias() {
         return ['Consolas','Televisores','Estetica','Fotografia','Musica','Electrodomesticos']
    }
}

console.log(Productos.getCategorias())


