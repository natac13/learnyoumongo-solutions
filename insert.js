import mongodb from 'mongodb';
const client = mongodb.MongoClient;
const first = process.argv[2];
const last = process.argv[3];
const url = 'mongodb://localhost:27017/learnyoumongo';
let doc = {
            firstName: first,
            lastName: last
        };

client.connect(url, function(err, db) {
    if (err) {throw err;}
    let collection = db.collection('docs')
    collection.insert(doc, function(err, data) {
            if(err) {throw err;}
            console.log(JSON.stringify(doc));
            db.close();
        });


});