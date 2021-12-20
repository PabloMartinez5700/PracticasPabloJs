'use strict;'

const listDiasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'] // Tengo una array para saber el dia de la semana

let fecNac1 = new Date('2000-7-5') // Le paso la fecha completa

let fecNac2 = new Date(2000,6,5) // Le paso el año, mes, dia

let posDiaSemana = listDiasSemana[fecNac1.getDay() - 1]
let diaSemana = posDiaSemana

console.log('Dia de Semana, que naci fue en ' + diaSemana + '.')

fecNac1.setFullYear(2021)

let pos = (fecNac1.getDay() - 1)

let diaAnnio2021 = listDiasSemana[pos]

console.log('Dia de Semana, que naci fue en ' + diaAnnio2021 + '.')

let fecHoy = new Date()

fecNac1.setFullYear(2000)

let diaHanTrancurrid = Math.floor((fecHoy - fecNac1) / (60 * 60 * 24 * 1000))

console.log('Diferencias de dias: ' + diaHanTrancurrid)

console.log(fecNac1.toString())
console.log(fecNac1.toLocaleTimeString())
console.log(fecNac1.toDateString());
console.log(fecNac1.toLocaleString());
console.log(fecNac1.toTimeString());

let fecha = new Date(2021,0,1)

if(fecha > fecNac1) console.log('Mi fecha de nacimiento es menor')
else console.log('Mi fecha de nacimiento es mayor')