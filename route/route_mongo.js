var router = require('express').Router()
var bodyParser = require('body-parser')
var mongoClient = require('mongodb').MongoClient
var mongodb = require('mongodb')
router.use(bodyParser.json())

var url = 
'mongodb://lin:12345@localhost:27017/expmongo'

// route get semua data 
router.get('/data', (req, res)=>{
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.find({}).toArray((er, data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

// route untuk ambil data tertentu (by index array)
router.get('/data/:index', (req, res)=>{
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.find({}).toArray((er, data)=>{
            console.log(data[req.params.index-1])
            res.send(data[req.params.index-1])
        })
    })
})

module.exports = router