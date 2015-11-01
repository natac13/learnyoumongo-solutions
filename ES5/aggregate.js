'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var client = _mongodb2['default'].MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

// collection named prices
// console.log average price to 2 decimal places
var size = process.argv[2];

client.connect(url, function (err, db) {
    db.collection('prices').aggregate([{ $match: { size: size } }, { $group: {
            _id: 'average',
            average: { $avg: '$price' } } }]).toArray(function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results[0].average.toFixed(2));
        db.close();
    });
});