// let mongo = require('mongodb').MongoClient;
import mongod from 'mongodb';
let mongo = mongod.MongoClient;
let url = 'mongodb://localhost:27017/learnyoumongo';
let numTest = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
      // db gives access to the database
    let y = db.collection('parrots')
            .find({age: {$gt: numTest} })
            .toArray((err, doc) => {
                console.log(doc);
                db.close();
            });
    // console.log(y);
    // db.close();
    })
