'use strict';
import mongodb from 'mongodb';

const client = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

// collection named prices
// console.log average price to 2 decimal places
const size = process.argv[2];

client.connect(url, function(err, db) {
    db.collection('prices').
        aggregate([
            {$match: {size: size}},
            {$group: {
                _id: 'average',
                average: {$avg: '$price'}}}
            ]).toArray(function(err, results) {
                if (err) {throw err;}
                console.log(results[0].average.toFixed(2));
                db.close();
            });
});

/*****   The solution from workshop    *********/

    // var mongo = require('mongodb').MongoClient
    // var size = process.argv[2]

    // var url = 'mongodb://localhost:27017/learnyoumongo'

    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var prices = db.collection('prices')
    //   prices.aggregate([
    //     { $match: {
    //       size: size
    //     }}
    //   , { $group: {
    //       _id: 'total'
    //     , total: {
    //         $avg: '$price'
    //       }
    //     }}
    //   ]).toArray(function(err, results) {
    //     if (err) throw err
    //     if (!results.length) {
    //       throw new Error('No results found')
    //     }
    //     var o = results[0]
    //     console.log(Number(o.total).toFixed(2))
    //     db.close()
    //   })
    // })

