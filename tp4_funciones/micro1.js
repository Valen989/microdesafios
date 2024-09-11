/*. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y
“silla para bebe”.
3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta
las siguientes consideraciones:
a. De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
i. Compacto: $14000
ii. Mediano: $17000
iii. Camioneta: $28000
b. Si adicionalmente el cliente requiere la silla para niños, se le cobra un
adicional por día de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
5. Para probar las diferentes respuestas invoca a la función, asigna diferentes
valores o argumentos. Usando el console.log(), muestra los resultados al
usuario:
“Estimado cliente: en base al tipo de vehículo compacto alquilado,
considerando los 3 días utilizados, el monto total a pagar es de $42000”
Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el
mensaje final.
*/




function alquilerDelVehiculo(tipoDeVehiculo,diasDeAlquiler) {
  
   if (tipoDeVehiculo == "Compacto") {
      let montoAPagar = 14000 * diasDeAlquiler
      return montoAPagar
   }
   else if (tipoDeVehiculo == "Mediano") {
     let montoAPagar = 17000 * diasDeAlquiler
     return montoAPagar 
   }
   else if (tipoDeVehiculo = "Caminoeta"){
     let montoAPagar = 28000 * diasDeAlquiler
      return montoAPagar
   }
}
function calcular2(sillaDeRuedas,diasDeAlquiler,alquilerDelVehiculo ) {
   if (sillaDeRuedas = true) {
      return 1200 * diasDeAlquiler + montoAPagar
   }
}




let resultado = calcular2("Compacto",3,true)


console.log(resultado);
