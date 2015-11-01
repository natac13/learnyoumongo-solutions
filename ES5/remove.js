'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var dbName = process.argv[2];
var collection = process.argv[3];
var id = process.argv[4];

var client = _mongodb2['default'].MongoClient;
var url = 'mongodb://localhost:27017/';
url = url + dbName;

client.connect(url, function (err, db) {
    db.collection(collection).remove({
        _id: id
    }, function (err) {
        if (err) throw err;
        db.close();
    });
});