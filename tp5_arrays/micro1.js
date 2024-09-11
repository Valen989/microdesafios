/*Define un electrodomésticos que contenga un conjunto de seis (6) productos de
electrodomésticos.
3. Ejecutar sobre el electrodomésticos creado las siguientes acciones:
● Acceder de manera arbitraria a diferentes elementos del electrodomésticos. Recuerda mostrar por
la consola los resultados.
● Extraer el primer elemento del electrodomésticos y agregarlo al final del mismo.
● Agregar al final del electrodomésticos dos (2) nuevos productos.
● Mostrar por la consola la cantidad de elementos que contiene el electrodomésticos.
● Buscar un elemento del electrodomésticos y crear una condición responsable de establecer si
existe o no el producto dentro del electrodomésticos. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.
● Unificar todos los elementos del electrodomésticos en una cadena de texto (string), separando los
elementos por espacios en blanco.
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.
● Con la cadena de texto obtenida generar un nuevo electrodomésticos con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados
por una coma.
*/


let electrodomésticos = ["Televisor","Microondas","Heladera","Lavarropa","Secarropa","Freezer"]


let primeraPosicion = electrodomésticos[0]

let segundaPosicion = electrodomésticos[1]

let terceraPosicion = electrodomésticos[2]

let cuartaPosicion = electrodomésticos[3]

let quintaPosicion = electrodomésticos[4]

let sextaPosicion = electrodomésticos[5]

console.log(primeraPosicion);

console.log(segundaPosicion);

console.log(terceraPosicion);

console.log(cuartaPosicion);

console.log(quintaPosicion);

console.log(sextaPosicion);

primerElectro = electrodomésticos.shift()

electrodomésticos.push(primerElectro)

console.log(electrodomésticos);

electrodomésticos.push('Batidora','Aire Acondicionado')

console.log(electrodomésticos);


cantElectros = electrodomésticos.length

console.log(cantElectros);


switch (electrodomésticos.includes('Freezer')) {
    case true :
        console.log("Producto encontrado");
        break;

    default:
        console.log("El producto buscado no existe");
        break;
}


let separadoPorEspacio = electrodomésticos.join(" ")

console.log(separadoPorEspacio);


console.log(separadoPorEspacio.length);

let nuevoString = separadoPorEspacio.replace('Batidora', 'Licuadora')

console.log(nuevoString);

let ultimoArray = nuevoString.split(" ")

console.log(ultimoArray);
