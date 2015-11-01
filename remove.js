'use strict';
import mongodb from 'mongodb';

const dbName = process.argv[2];
const collection = process.argv[3];
const id = process.argv[4];

const client = mongodb.MongoClient;
let url = 'mongodb://localhost:27017/';
url = url + dbName;

client.connect(url, function(err, db) {
    db.collection(collection).remove({
        _id: id
    }, function(err) {
        if (err) throw err;
        db.close();
    });
});
