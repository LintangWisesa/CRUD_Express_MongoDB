var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.json())

// bikin route di sini!

app.listen(5000, ()=>{
    console.log('Server aktif di port 5000!')
})