let peliculas = require('./peliculas')

let fs = require('fs')

function buscarPelicula(id) {
    for (let propiedad in peliculas) {
        if (peliculas[propiedad].id === id) {
            console.log(peliculas[propiedad]);
            
        }
    
    }  
}

buscarPelicula(1)

const varMensaje = './mensaje.txt'

const leyendoMensaje =fs.readFileSync(varMensaje,'utf-8')

console.log(leyendoMensaje);





//console.log(varMensaje);

 





