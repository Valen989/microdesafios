/*
En el archivo creado debes desarrollar un código para lograr efectuar operaciones
aritméticas. Para ello, declarar dos variables, otorgando el nombre y los valores
numéricos que consideres. Ejemplo: let numero1 = 16;
3. Usando el console.log() mostrar al usuario los resultados de las siguientes operaciones
aritméticas, en función de los valores asignados a las variables:
a. suma
b. resta
c. multiplicación
d. división
e. módulo
4. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true. De
lo contrario mostrará false
5. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true. De
lo contrario mostrará false
*/
let numero1 = 16
let numero2 = 18
let resultado1 = numero1 + numero2
let resultado2 = numero1 - numero2
let resultado3 = numero1 * numero2
let resultado4 = numero1 / numero2
let resultado5 = numero1 % numero2
console.log(`${numero1} + ${numero2} = ${resultado1}`);
console.log(`${numero1} - ${numero2} = ${resultado2}`);
console.log(`${numero1} * ${numero2} = ${resultado3}`);
console.log(`${numero1} / ${numero2} = ${resultado4}`);
console.log(`${numero1} % ${numero2} = ${resultado5}`);

let comparacion1 = numero1 > numero2 
let comparacion2 = numero1 < numero2

console.log(comparacion1, comparacion2);