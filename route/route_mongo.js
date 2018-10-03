var router = require('express').Router()
var bodyParser = require('body-parser')
var mongoCLient = require('mongodb').MongoClient
var mongodb = require('mongodb')
router.use(bodyParser.json())

var url = 
'mongodb://lin:12345@localhost:27017/expmongo'

router.get('/data', (req, res)=>{
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.find({}).toArray((er, data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

module.exports = router