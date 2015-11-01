'use strict';
import mongodb from 'mongodb';
const client = mongodb.MongoClient;
let url = 'mongodb://localhost:27017/';
const dbName = process.argv[2];
url = url + dbName;

client.connect(url, function(err, db) {
    db.collection('users')
        .update({
            username: 'tinatime'
        },
        {
            $set: {
                age: 40
            }
        }, function(err) {
            if (err) throw err;
            db.close();
        });

})
