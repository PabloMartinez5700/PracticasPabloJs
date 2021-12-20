'use strict;'

let dniTeclad = prompt('Introduce tu dni')

if(dniTeclad === undefined || dniTeclad.length < 9) alert('Dato no válido.')
else (validarDni(dniTeclad) ? alert('El Dni ' + dniTeclad + ' es correcto.') : alert('El Dni ' + dniTeclad + ' es incorrecto.'))


function validarDni (dni){

  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE' //Todas las letras del Dni

  // Tengo solo los numeros del dni
  let numDniIntroduc = dni.substring(0, 8) 

  // Tengo la letra en mayuscula del dni
  let letraDniIntroduc = dni.substring(8,9) 

  // Tengo la posicion de la letra que le corresponde
  let posicion = numDniIntroduc % 23 

  // Tengo la letra que le corresponde
  let letraCorrespon = letras.charAt(posicion) 

  // Devuelvo true o falso dependiendo si coinciden o no
  return letraCorrespon == letraDniIntroduc 
}