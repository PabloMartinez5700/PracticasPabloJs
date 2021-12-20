'use strict;'

let fecha1 = new Date(2000,0,0)
let fecha2 = new Date(2021,0,0)

let diaHanTrancurrid = Math.round((fecha2 - fecha1) / (60 * 60 * 24 * 1000))

console.log('Han transcurrido' + diaHanTrancurrid + 'dias.')