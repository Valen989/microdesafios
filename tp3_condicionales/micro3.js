let palabraTraducir = "Mesa"

switch (palabraTraducir) {
    case "perro":
        mensaje = `La palabra : ${palabraTraducir} traducida al ingles es = dog`
        break;
    
    case "gato":
        mensaje = `La palabra : ${palabraTraducir} traducida al ingles es = cat`
        break;

    case "puerta":
        mensaje = `La palabra : ${palabraTraducir} traducida al ingles es = door`
        break;
    
    case "ventana":
        mensaje = `La palabra : ${palabraTraducir} traducida al ingles es = window`
        break;
   
    case "mesa":
        mensaje = `La palabra : ${palabraTraducir} traducida al ingles es = table`
        break;

    default:
        mensaje = "La palabra ingresada es incorrecta"
        
        break;
}


console.log(mensaje);