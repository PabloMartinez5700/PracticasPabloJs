'use strick;'



printWatch(obtenHora(), obtenerMinut(), getMinuteInterval());

function obtenHora() {
  for (;;) {
    let horaInicial = Number.parseInt(prompt("Hora de Inicio"));

    if (!Number.isNaN(horaInicial) || horaInicial === ''){
      alert('Valor debe ser un número.')
    } else if ((horaInicial) < 0 || (horaInicial > 24)) {
      alert('Rango de hora entre 0 y 23.')
    } else break;
  }
  return Number.parseInt(hourInit);
}

function obtenerMinut () {
  for (;;) {
    let minutInicio = Number.parseInt(prompt('Minutos de Inicio'))
    if (!Number.isNaN(minutInicio)) {
      alert('Valor debe ser un número.');
    } else if (minutInicio < 0 || minutInicio > 60) {
      alert('Rango de minutos debe estar entre 0 - 59');
    } else break;
  }
  return Number.parseInt(minutInicio);
}

function getMinuteInterval() {
  for (;;) {
    let minutIntervalo = Number.parseInt(prompt("Minutos que quieres que avance"))
    if (!Number.isNaN(minutIntervalo)) {
      alert('Valor debe ser un número.')
    } else if (minutIntervalo < 0 || minutIntervalo > 60) {
      alert('Valor de los minutos debe estar entre 0 - 59')
    } else break
  }
  return Number.parseInt(minuteInterval)
}


function printWatch(hour, minute, interval) {

for (;;) {
    if(minute < 10) minute = '0' + minute;
    console.log('\n' + hour + ':' + minute);
    minute = parseInt(minute);
    minute += interval;
    if(minute > 59) {
        hour++
        minute = minute - 60
    }
  if (hour == 17 && minute > '0')break
}
}