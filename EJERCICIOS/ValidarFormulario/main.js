'use strict;'

let btn  = document.getElementById('comprueba')
let nombre = document.getElementById('nombre');
btn.addEventListener('click', (event) => {
  if(!event.checkValidity()) {
    event.preventDefault();
  }
  document.getElementById('errorNombr').innerText = nombre.validationMessage;
});


  /*
function myFunction() {
  const form  = document.getElementsByTagName('form')[0];

  


  if(nombre.validity.valueMissing){
    nombre.setCustomValidity('No has Introducido nada todavia.')
  }else if(nombre.validity.patternMismatch){
    nombre.setCustomValidity('Debes de introducir caracteres')
  }else if(nombre.validity.tooShort){
    nombre.setCustomValidity('Minima es de 15 caracteres.')
  }else if(nombre.validity.tooLong){
    nombre.setCustomValidity('Maxima es de 80 caracteres.')
  }

  if(apellid.validity.valueMissing){
    apellid.setCustomValidity('No has Introducido nada todavia.')
  }else if(apellid.validity.tooShort){
    apellid.setCustomValidity('Minima es de 15 caracteres.')
  }else if(apellid.validity.tooLong){
    apellid.setCustomValidity('Maxima es de 80 caracteres.')
  }


  if(email.validity.valueMissing){
    email.setCustomValidity('No has Introducido nada todavia.')
  }else if(email.validity.patternMismatch){
    email.setCustomValidity('Debes de un .com o .es')
  }

  if(postal.validity.valueMissing){
    postal.setCustomValidity('No has Introducido nada todavia.')
  }else if(postal.validity.patternMismatch){
    postal.setCustomValidity('Formato incorrecto')
  }

  if(check.validity.valueMissing){
    check.setCustomValidity('Debes de marcar la opcion')
  }
  */