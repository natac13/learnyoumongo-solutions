'use strict';
import mongodb from 'mongodb';

const client = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';

client.connect(url, function(err, db) {
    if (err) {throw err;}
    db.collection('parrots')
        .count(
        {age: {$gt: parseInt(process.argv[2], 10)}},
        function(err, count) {
            if (err) {throw err;}
            console.log(count);
            db.close();
        }
        );

})