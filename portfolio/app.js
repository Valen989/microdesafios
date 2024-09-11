const express = require('express')

const app = express()

const path = require ('path')

const PORT = 3030

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'))
})

app.listen(3030,() =>
console.log('servidor corriendo en localhost:'+PORT))