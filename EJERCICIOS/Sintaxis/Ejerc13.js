'use strict;'

/*
Realiza un division, detecta el valor 5 que esta entre comillas, como un numero de tipo int y devuelve el resultado de la division entre los dos.
*/
console.log('5' / 2)

/*
Devuelve el valor 5 ya que el compilador dectecta el 'null' como un valor vacio es decir como un 0, porque 5 - null (0) = 5
*/
console.log('5' - null)

/*
Devuelve NaN. Convierte 5 a numero intenta restarlo a algo que no tiene definicion y devuelve algo que no es un numero
*/
console.log('5' - undefined)

/*
Devuelve el valor 5, ya que el valor 'true' lo interpreta como 1, y multiplica 5 * true (1) = 5
*/
console.log('5' * true)

/*
Devuelve el valor 0, ya que el valor 'false' lo interpreta como 0, y multiplica 5 * false (0) = 0
*/
console.log('5' * false)

/*
Devuelve el NaN, ya que no puede realizar la operacion de multiplicar, a causa de que no reconoce como un numero una cadena de texto.
*/
console.log('5' * 'Hola')

/*
Devuelve el 5Hola, ya que con el signo + puedes concatenar cadenas, por eso el numero 5 lo interpreta como una cadena.
*/
console.log(5 + 'Hola')

/*
Devuelve el 55, ya que con el signo + puedes concatenar cadenas, por eso el numero 5 lo interpreta como una cadena.
*/
console.log(5 + '5')

/*
Devuelve el 55, ya que con el signo + puedes concatenar cadenas, por eso el numero 5 lo interpreta como una cadena.
*/
console.log('5' + 5)

/*
Devuelve 'true', ya que interpreta el valor 5 como un tipo de dato int aunque este entre comillas, y lo compare con el valor 4. Como 5 es mayor que 4, por eso devuelve true 
*/
console.log('5' > 4)

/*
Devuelve 'true', ya que interpreta el valor 4 como un tipo de dato int aunque este entre comillas, y lo compare con el valor 5. Como 5 es mayor que 4, por eso devuelve true 
*/
console.log( 5 > '4')

/*
Devuelve 'true', ya que interpreta tanto el valor 5 y 40 como un tipo de dato int aunque este entre comillas, y los comparan. Como 5 es mayor que 40, es decir coge el valor primero de un numero con dos cifras como la primera cifra de 40 es 4 y 5 es mayor que 4, devuelve true
*/
console.log('5' > '40')

/*
Devuelve 'true', ya que interpreta el valor 5 como un tipo de dato int aunque este entre comillas, y lo compara con el valor 5. Como los dos valores son iguales, devuelve true
*/
console.log('5' == 5)

/*
Devuelve 'true', ya que coge la primera cifra de un numero de dos cifras y los comparan. Como la primera cifra es 5, lo compara como son valores iguales, devuelve true
*/
console.log(5 == 5.0)

/*
Devuelve 'true', ya que el valor false su valor es 0, por lo tanto como son dos valores iguales devuelve true.
*/
console.log(0 == false)

/*
Devuelve 'true', ya que interpreta la cadena vacia como un int como esta vacia, no hay ningun caracter dentro, su valor es 0 y lo compara con false y como sus valores de los dos son 0 devuelve true
*/
console.log('' == false)

/*
Devuelve 'true', ya que interpreta la cadena vacia como un int como esta vacia, no hay ningun caracter dentro, su valor es 0 y lo compara con false y como sus valores de los dos son 0 devuelve true
*/
console.log(' ' == false)

/*
Devuelve 'true', ya que convierte en este caso un array estatico como un tipo de dato valor, cuyo valor es 0 y como false su valor es 0. Compara los dos valores, y como son iguales devuelve true
*/
console.log([] == false)

/*
Devuelve 'false', ya que cuando intenta comparar un valor null siempre el resultado va a ser false, sin importar el otro valor
*/
console.log(null == false)

/*
Devuelve 'false', ya que siempre un tipo de dato indefinido siempre devolvera false aunque se compare un 'false'
*/
console.log(undefined == false)

/*
Devuelve 'true', ya que los dos son tipos sin un valor ninguno
*/
console.log(undefined == null)