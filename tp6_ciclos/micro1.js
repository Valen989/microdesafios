/*Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el
console.log() para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
Estimada Gloria Medina:
El monto total de los depósitos es de: $55000.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.
*/

let operacionesBancariasDeGloria = [4000,5000,-8000,2000,12500,23900,-15100]

let operacionesBancariasDeCarlos = [21321,987987,-21321,32154,-45646,546548,-15100]


function calcularSaldos(operacionesCuenta) {

    let totalDepositos = 0

    let totalRetiros = 0

    for (let i = 0; i < operacionesCuenta.length; i++) {
        if (operacionesCuenta[i] > 0) {
            totalDepositos = totalDepositos + operacionesCuenta[i]  
        }
        else {
            totalRetiros = totalRetiros + operacionesCuenta[i]
        }
        
    }

    let totalSaldo = totalDepositos + totalRetiros

    let arraySaldos = [totalDepositos,totalRetiros,totalSaldo]
    return arraySaldos
}


function mensaje(nombre, apellido, cuentaCaluclada) {
    let arraySaldos = calcularSaldos(cuentaCaluclada)
    return `Estimado ${nombre} ${apellido} El monto total de los depósitos es de: $${arraySaldos[0]}.
El monto total de los retiros es de: $${arraySaldos[1]}.
Por lo tanto, su saldo actual en la cuenta es de: $${arraySaldos[2]}.`
}

let resultado = mensaje("Gloria","Medina",operacionesBancariasDeGloria)

let resultado2 = mensaje("Carlos","Gutierrez",operacionesBancariasDeCarlos)


console.log(resultado);


console.log(resultado2);

