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
        return '\n- ' + this.nombre + '(' + this.categoria + '): ' + this.unidades + ' * ' +  this.precio.toFixed(2) + '€ = '
    }
}

let p1 = new Productos('TV Samsung', 'Televisores', 5,120)
console.log(p1.getInfo() + p1.importe().toFixed(2) + ' €\n')     

let p2 = new Productos('PS4', 'Consolas', 2,560)
console.log(p2.getInfo() + p2.importe().toFixed(2) + ' €\n')   

let p3 = new Productos('PS5', 'Consolas', 1,780)
console.log(p3.getInfo() + p3.importe().toFixed(2) + ' €\n')   