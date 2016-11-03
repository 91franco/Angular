var MongoClient = require( 'mongodb' ).MongoClient;
var express = require('express');
var app = express();
var rutas = require('./rutas');
/*
var bodyParser = require('body-parser');
var cors = require('cors');
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.user(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());
app.use(cors());
*/

MongoClient.connect('mongodb://localhost:27017/franco', function(err, db) {
  if (err)
   throw err;

     //db.collection('personas')
      //.find({balance:{$eq:"$2,826.16"},{_id:0,name:1,balance:1})
      //.sort({balance:1})
      //.toArray((err, data) => { 
        /*app.use((req,res,next) => {
          req.db = db.collection('franco');
          next();
        });*/
    


});

    app.get('/users',(req,res,next) =>{
          // console.log("users");
          req.res();/*          
          .db
          .find()
          .toArray(err,data) =>{
            res.json(data);
          });
        */

        });
        //app.use('/',rutas);
      //if (err)
        //console.log(err);

      //console.log(data);
      app.listen(3333,function(){
      console.log('Servidor iniciando ...');
    });
