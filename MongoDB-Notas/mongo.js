var MongoClient = require( 'mongodb' ).MongoClient;

MongoClient.connect('mongodb://localhost:27017/franco', function(err, db) {
  if (err)
    console.log(err);

    db.collection('personas')
    .find({balance:{$eq:"$2,826.16"},{_id:0,name:1,balance:1})
    .sort({balance:1})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      console.log(data);
    })


});
