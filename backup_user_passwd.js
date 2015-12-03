// retrieve password when username is given

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/userC';
var user="rajkiran"

var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});

//app.listen(9090, function() {
//  console.log('Server running at http://127.0.0.1:9090/');
//});









var findUser = function(db, callback) {
   var cursor =db.collection('userC').find({"user":user} );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc.pass);
      } else {
         callback();
      }
   });
};



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findUser(db, function() {
      db.close();
  });
});
