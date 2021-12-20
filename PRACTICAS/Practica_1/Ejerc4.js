'use strick;'

let pass = prompt("Introduce tu password")

if(pass === undefined) alert('Dato no válido')
else console.log(validarPassword(pass))

function validarPassword(password) {
    let cont = 0;

    console.log(password.length);
    if(pass.length >= 8){
        cont++;
    }
    console.log('Contador de longitud: ' + cont);

    let arrayPassword = [...password];

    console.log(arrayPassword);

    if(containsUpperCase(arrayPassword)) {
        cont++;
    }
    console.log('Contador de Mayúsculas:' + cont);

    if(containsLowerCase(arrayPassword)) {
        cont++;
    }
    if(containsNumber(arrayPassword)) {
        cont++;
    }
    if(containsSpecialCharacter(arrayPassword)) {
        cont++;
    }
    return cont;

}

function isUpperCase(str){
    return str == str.toUpperCase() && str != str.toLowerCase();
}


function containsUpperCase(str) {
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(let letra of str) {
        for(let letra2 of abc) {
            if(letra2 == letra) {
                return true;
            }
        }
    }
    return false;
}

function containsLowerCase(str) {
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(let letra of str) {
        for(let letra2 of abc) {
            if(letra2.toLowerCase() == letra) {
                return true;
            }
        }
    }
    return false;
}

function containsNumber(str) {
    let abc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(let letra of str) {
        for(let letra2 of abc) {
            if(letra2 == letra) {
                return true;
            }
        }
    }
    return false;
}

function containsSpecialCharacter(str) {
    let abc = ['-', '_', '=', '*', '+', '$', '@', '#'];
    for(let letra of str) {
        for(let letra2 of abc) {
            if(letra2 == letra) {
                return true;
            }
        }
    }
    return false;
}