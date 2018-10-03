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
            console.log(data[req.params.index - 1])
            res.send(data[req.params.index - 1])
        })
    })
})

// route post data ke database
router.post('/data', (req, res)=>{
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.insertMany([{
            nama: req.body.nama,
            usia: req.body.usia, 
            kota: req.body.kota
        }], (error, hasil)=>{
            console.log(hasil)
            res.send(hasil)
        })
    })
})

// edit data tertentu
router.put('/data/:id', (req, res)=>{
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.updateOne(
            {_id: new mongodb.ObjectID(
                `${req.params.id}`
            )}, 
            {$set: {
                nama: req.body.nama,
                usia: req.body.usia, 
                kota: req.body.kota
            }},
            (error, hasil)=>{
                console.log(hasil)
                res.send(hasil)
        })
    })
})

// delete id tertentu
router.delete('/data/:id', (req, res)=>{
    mongoClient.connect(url, (error, db)=>{
        var col = db.collection('datamongo')
        col.deleteOne(
            {_id: new mongodb.ObjectID(
                `${req.params.id}`
            )},
            (error, hasil)=>{
                console.log(hasil)
                res.send(hasil)
        })
    })
})

module.exports = router