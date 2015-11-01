// let mongo = require('mongodb').MongoClient;
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var mongo = _mongodb2['default'].MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var numTest = parseInt(process.argv[2]);

mongo.connect(url, function (err, db) {
    // db gives access to the database
    var y = db.collection('parrots').find({ age: { $gt: numTest } }).toArray(function (err, doc) {
        console.log(doc);
        db.close();
    });
    // console.log(y);
    // db.close();
});
