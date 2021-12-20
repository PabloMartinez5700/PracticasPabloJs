'use strict;'

let tvSamsung = {
    nombre : 'Tv Samsung 42',
    categoria : 'Televisores',
    unidades : 4,
    precio : 345.95,

    getImporte () {
        return this.unidades * this.precio
    },
    
    getInfo() {
        return '\n- ' + this.nombre + '(' + this.categoria + '): ' + this.unidades + ' * ' +  this.precio.toFixed(2) + '€ = '
    }
}

console.log(tvSamsung.getInfo() + tvSamsung.getImporte().toFixed(2))