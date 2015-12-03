// retrieve password when username is given

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/userC';
var user="rajkiran"
var user_name
var pwd
var nodeArr
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
app.use(bodyParser.urlencoded({ extended: true })); 
// app.post ends here!!!!!!!!
app.post('/myaction', function(req, res) {
	user_name = req.body.name;
							// -- function starts here !!!!
var findUser = function(db, callback) {
res.write('<html><head></head><body>')
// ----------------------------------------------------trial
//-----------------------------------------------------trial
   var cursor =db.collection('userC').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
//        console.dir(doc.pass);
	
	pwd = doc.pass
	res.write('<h1>You sent the name "' + user_name + pwd + '".</h1>');
      } else {
	res.write('</body></html>');
         callback();
	res.end();
      }
   				});

};



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findUser(db, function() {
      db.close();
  });
});
							// -- function ends here !!!
//  res.send('You sent the name "' + user_name + pwd + '".');
});
// -- app.post ends here !!!!!!
app.listen(9090, function() {
console.log('Server running at http://127.0.0.1:9090/');
});




