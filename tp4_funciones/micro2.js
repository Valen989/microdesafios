

function totalAPagar(tipoDeHamburguesa,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla) {
    
    
    if (tipoDeHamburguesa == "CarneALaParrilla") {
         precio = 1800
    }
    else if (tipoDeHamburguesa == "Pollo") {
         precio = 1500
    }
    
    else if (tipoDeHamburguesa == "Vegetariana") {
        precio = 1200
    }
    else {
        return "error"
    }

    if (jamon == true) {
         precio += 30
    }
    
    if (queso == true) {
        precio +=25
    }
   
    if (salsaDeTomate == true) {
        precio +=5
    }
    
    if (mayonesa == true ) {
        precio +=5
    }

    if (mostaza == true) {
        precio +=5
    }

    if (tomate == true) {
        precio +=15
    }

    if (lechuga == true) {
        precio +=10
    }

    if (cebolla == true) {
        precio +=10
    }

    return precio
}

function mensaje(nombre,apellido,totalAPagar) {
    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`
}

let total = totalAPagar("Pollo", true, true, false, false, true, false, true, false)

let resultado = mensaje("Valentino", "Parma", total)

console.log(resultado);
