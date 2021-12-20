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

    valueOf() {
        return this.unidades
    }
}

let p1 = new Productos('TV Samsung', 'Televisores', 2,120)

let p2 = new Productos('PS4', 'Consolas', 2,560)

console.log((p1 > p2 || p1 == p2) ? "Unidades del Producto '" + p1.nombre.toUpperCase() + "', son mayores O iguales que las del Producto '" + p2.nombre.toUpperCase() + "'" 
: "Unidades del Producto '" + p2.nombre.toUpperCase() + "', son mayores O iguales que las del Producto '" + p1.nombre.toUpperCase() + "'" )