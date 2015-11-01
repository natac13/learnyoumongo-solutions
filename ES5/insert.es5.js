'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var client = _mongodb2['default'].MongoClient;
var obj1 = process.argv[2];
var obj2 = process.argv[3];
var url = 'mongodb://localhost:27017/learnyoumongo';
var doc = {
    firstName: obj1,
    lastName: obj2
};

client.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    var collection = db.collection('docs');
    collection.insert(doc, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(doc));
        db.close();
    });
});
