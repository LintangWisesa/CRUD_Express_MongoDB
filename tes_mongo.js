var x = require('mongodb').MongoClient
var mongodb = require('mongodb')
var url = 
'mongodb://lin:12345@localhost:27017/expmongo'

// fungsi untuk konek ke db expmongo
x.connect(url, (error, db)=>{
    console.log('Sukses terhubung!')
    hapus(db)
})

// fungsi untuk input data
var input = (db) => {
    var col = db.collection('datamongo')
    col.insertMany([
        {nama: 'Euis', usia: 23, kota: 'Sukabumi'}
    ], (error, hasil)=>{
        console.log(hasil)
        res.send(hasil)
    })
}

// fungsi untuk ambil semua data
var ambil = (db) => {
    var col = db.collection('datamongo')
    col.find({usia: {$gt:22}}).toArray((er, data)=>{
        console.log(data)
    })
}

//  fungsi edit all data
var edit = (db)=>{
    var col = db.collection('datamongo')
    col.update(
        {nama:'Deni'}, 
        {$set: {kota:'Surabaya'}},
        {multi: true},
        (error, hasil)=>{
            console.log(hasil)
        })
}

// remove data by id
var hapus = (db) => {
    var col = db.collection('datamongo')
    col.remove(
        {_id: new mongodb.ObjectID(
            "5bb2ed2e97413a2eb0867a93"
        )},
        (error, hasil)=>{
            console.log(hasil)
        }
    )
}