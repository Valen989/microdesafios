let pagoMes = 1500;

let consumoKWH = 200;

let pagoMesSin = 20 * pagoMes / 100 + pagoMes

let totalPago = consumoKWH > 300 ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}, en base al ajuste tarifario (hogares con consumo mayor a 300kwh pormes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoMesSin}`: `Debido a que su hogar tuvo un consumo de ${consumoKWH}, cumplimos con informarle que se ha ajustado el total a pagar, que será de ${pagoMes}`

console.log(totalPago);
