import mongodb from 'mongodb';
let mongo = mongodb.MongoClient;
let url = 'mongodb://localhost:27017/learnyoumongo';
let numTest = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
    if (err) { throw err; }
    db.collection('parrots')
        .find({age: {$gt: numTest} }, {
                name: 1,
                age: 1,
                _id: 0
            })
            .toArray((err, data) => {
                if (err) { throw err; }
                console.log(data);
                db.close();
            })
})

// let mongo = require('mongodb').MongoClient;
// import mongod from 'mongodb';
// let mongo = mongod.MongoClient;
// let url = 'mongodb://localhost:27017/learnyoumongo';
// let numTest = parseInt(process.argv[2]);

// mongo.connect(url, (err, db) => {
//       // db gives access to the database
//     let y = db.collection('parrots')
//             .find({age: {$gt: numTest} }, {
//                 name: 1,
//                 age: 1,
//                 _id: 0
//             })
//             .toArray((err, doc) => {
//                 console.log(doc);
//                 db.close();
//             });
//     // console.log(y);
//     // db.close();
//     })