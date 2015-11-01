'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var client = _mongodb2['default'].MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

client.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    db.collection('parrots').count({ age: { $gt: parseInt(process.argv[2], 10) } }, function (err, count) {
        if (err) {
            throw err;
        }
        console.log(count);
        db.close();
    });
});