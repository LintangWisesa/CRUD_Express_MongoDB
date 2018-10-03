var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var routeSaya = require('./route/route_mongo')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routeSaya)

app.get('/', (req, res)=>{
    res.send('<h1>Express ♥ MongoDB</h1>')
})

app.listen(5000, ()=>{
    console.log('Server aktif di port 5000!')
})