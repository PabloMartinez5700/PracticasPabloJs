'use strick;'

function addItems(nota, item) {
    item.push(nota);
    return item;
}

function clearItems(notas) {
    let result = [];
    for(let element of notas) {
        let number = Number.parseFloat(element);
        if(!Number.isNaN(number)) result.push(number);
    }
    return result;
}

let firstLowerNote = function (arrayNotas) {
    arrayNotas = arrayNotas.sort( (a, b) => (a > b) ? -1 : 1);
    return arrayNotas.find( (nota) => nota < 5);
}

let getApproab = (array) => array.filter( (nota) => (nota >= 5) ? true : false);

let media = notas.reduce((total, nota) => total += nota );