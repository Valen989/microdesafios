function Peliculas(id,premios,duracion,precio,genero) {
    this.id = id
    this.premios = premios
    this.duracion = duracion
    this.precio = precio
    this.genero = genero
}

let pelicula1 = new Peliculas(1,"3 oscars","2 hs",3800,"Accion")

let pelicula2 = new Peliculas(2,"2 martin fierro","1hs,30min",4500, "Drama")


module.exports = {pelicula1,pelicula2}