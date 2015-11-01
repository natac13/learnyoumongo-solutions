'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var mongo = _mongodb2['default'].MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var numTest = parseInt(process.argv[2]);

mongo.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    db.collection('parrots').find({ age: { $gt: numTest } }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        db.close();
    });
});

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
