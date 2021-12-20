'use strict;'

const listMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const listDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

let fecha = new Date()

let dia = fecha.getDate()

let posDiaSeman = fecha.getDay()

let diaSeman = listDias[posDiaSeman - 1]

let annio = fecha.getFullYear()

let posMes = fecha.getMonth()

let mes = listMeses[posMes]

let horActual = fecha.getHours()

let minutActual = fecha.getMinutes()

console.log('Estamos a ' + diaSeman + ', ' + dia + ' de ' + mes + ' de ' + annio + ' Y son las ' + horActual + ':' + minutActual)