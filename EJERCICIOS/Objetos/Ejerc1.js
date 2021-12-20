'use strict;'

// Creando object con instanciado con new

let persona = new Object();

persona.nombre = 'Pablo'
persona.apellidos = 'Martinez'
persona.edad = 21

console.log('----------------------------------------')
console.log('Nombre:' + persona.nombre)
console.log('Apellidos:' + persona.apellidos)
console.log('Edad:' + persona.edad)
console.log('----------------------------------------')

// Creando object de forma literal
let pers = {
    nombre: 'Pablo',
    apellidos: 'Martínez',
    edad: 21,

    getInfo:function() {
        return 'Persona cuyo nombre es ' + this.nombre + ' y apellidos ' + this.apellidos;
    },

    getNombre:function(){
        return this.nombre
    }
}

console.log(pers.getInfo())