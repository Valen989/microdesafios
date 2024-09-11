const express = require('express')

const app = express()

const path = require('path')

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.listen(3030,() =>
console.log('servidor corriendo localhost:3030'))
