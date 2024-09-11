let operacion ="restar"
let numero1 = 8
let numero2 = 5


switch (operacion) {
    
    case "sumar":
        resultado = numero1 + numero2
        mensaje = `El resultado de sumar ${numero1} + ${numero2} es ${resultado}`
        break;
    
    case "restar":
        resultado = numero1 - numero2
        mensaje = `El resultado de restar ${numero1} - ${numero2} es ${resultado}`
        break;
    
    case "multiplicar":
        resultado = numero1 * numero2
        mensaje = `El resultado de multiplicar ${numero1} * ${numero2} es ${resultado}`
        break;
   
    case "dividir":
        resultado = numero1 / numero2
        mensaje = `El resultado de dividir ${numero1} / ${numero2} es ${resultado}`
        break;

    default:
        mensaje = "Las operaciones aceptadas son: sumar-restar-multiplicar-dividir."
        break;


}

console.log(mensaje);