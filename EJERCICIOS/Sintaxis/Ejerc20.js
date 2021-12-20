'use strict;'

let sald = 50
let imp = 5 
let result

// Retirar dinero
try {
    result = retirarDinero(sald, imp)
} catch(err) {
   alert(err)
}

function retirarDinero(saldo, cantidad) {
    if(saldo < cantidad) throw new Error('Saldo insuficiente.')
    return saldo - cantidad
}

try {
    result = salarioIgual(sald, imp)
} catch(err) {
   alert(err)
}finally{
    console.log('Fin de Transacción')
}

function salarioIgual(saldo, cantidad) {
    let retirada = retirarDinero(saldo,cantidad)
    if(saldo == retirada) throw new Error('Saldo insuficiente.')
    return saldo - cantidad
}

try {
    result = saldoInferior(sald)
} catch(err) {
   alert(err)
}finally{
    console.log('Fin de Transacción')
}

function saldoInferior(saldo, cantidad) {
    if(saldo < 100) throw new Error('Saldo insuficiente.')
    return saldo - cantidad
}