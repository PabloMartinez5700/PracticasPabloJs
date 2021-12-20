'use strick;'

let edad = prompt("Introduce tu edad");

parseInt(edad)

if(edad <= 0) alert('Introduce numeros positivos mayores que 0.')
else {
    if(isNaN(edad) || edad === undefined){
        alert("Valor debe ser un numero.")
    } else {
// Con la Math.floor puedo obtener la parte entera de un numero, si le resto la edad con su parte entera, si me da distinto a 0 es porque es un decimal.
        if ((edad - Math.floor(edad)) != 0){
            alert("Debe introducir numeros sin decimales.")
        }else {
            if (edad < 19){
                alert("Todavía eres menor de edad.")
            } else {
                if(edad < 18 || edad < 66){
                    alert("Estas Trabajando o Estudiando.")
                }else alert("Estas Jubilado.") 
            }
        }
    }
}