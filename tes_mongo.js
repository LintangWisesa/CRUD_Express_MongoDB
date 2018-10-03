var x = require('mongodb').MongoClient
var mongodb = require('mongodb')
var url = 
'mongodb://lin:12345@localhost:27017/expmongo'

// fungsi untuk konek ke db expmongo
x.connect(url, (error, db)=>{
    console.log('Sukses terhubung!')
    hapus(db) // panggil fungsi transaksi data
})

// fungsi untuk input data
var inputData = (db) => {
    var col = db.collection('datamongo')
    col.insertMany([
        {nama: 'Euis', usia: 23, kota: 'Sukabumi'}
    ], (error, hasil)=>{
        console.log(hasil)
        res.send(hasil)
    })
}

// fungsi untuk ambil semua data
var ambilSemua = (db) => {
    var col = db.collection('datamongo')
    col.find({}).toArray((er, data)=>{
        console.log(data)
    })
}

// fungsi untuk ambil data tertentu
var ambilSatu = (db) => {
    var col = db.collection('datamongo')
    col.find({usia: {$gt:22}}).toArray((er, data)=>{
        console.log(data)
    })
}

//  fungsi edit data pertama yg mmnuhi syarat
var editSatu = (db)=>{
    var col = db.collection('datamongo')
    col.updateOne(
        {nama:'Andi'}, 
        {$set: {kota:'Surabaya'}},
        (error, hasil)=>{
            console.log(hasil)
        })
}

//  fungsi edit semua data yg mmnuhi syarat
var editSemua = (db)=>{
    var col = db.collection('datamongo')
    col.update(
        {nama:'Deni'}, 
        {$set: {kota:'Surabaya'}},
        {multi: true},
        (error, hasil)=>{
            console.log(hasil)
        })
}

// hapus satu data tertentu
const hapusData = function(db, callback) {
    const collection = db.collection('karyawan');
    collection.deleteOne({nama:'Budi'}, (err, out) => {
      console.log("Data sukses dihapus!");
      callback(out);
    }); 
}
  
// hapus satu data by id
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