'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var client = _mongodb2['default'].MongoClient;
var url = 'mongodb://localhost:27017/';
var dbName = process.argv[2];
url = url + dbName;

client.connect(url, function (err, db) {
    db.collection('users').update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function (err) {
        if (err) throw err;
        db.close();
    });
});