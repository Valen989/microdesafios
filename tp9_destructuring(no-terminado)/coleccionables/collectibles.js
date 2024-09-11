const fs = require('fs') //modulo nativo de node file

const figuras1 = fs.readFileSync('/datos/figuras1.json','utf-8') //leyendo un archivo JSON
const figuras2 = fs.readFileSync('/datos/figuras2.json','utf-8')
const figuras3 = fs.readFileSync('/datos/figuras3.json','utf-8')



const figuras1Parseado = JSON.parse(figuras1)

const figuras2Parseado = JSON.parse(figuras2)

const figuras3Parseado = JSON.parse(figuras3)

console.log(figuras3Parseado);


module.exports = {figuras1Parseado,figuras2Parseado,figuras3Parseado}