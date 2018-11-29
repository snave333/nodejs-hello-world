const express = require('express')
const path = require('path')
const mongodb = require('mongodb');
const PORT = process.env.PORT || 5000;

let uri = 'mongodb://heroku_8480qz2d:YS4MjBkx3q8LdPn@ds155737.mlab.com:55737/heroku_8480qz2d';

mongodb.MongoClient.connect(uri, function(err, client) {
  if(err) throw err;

  console.log('here?');

  /*
   * Get the database from the client. Nothing is required to create a
   * new database, it is created automatically when we insert.
   */

  let db = client.db('heroku_8480qz2d')

  /*
   * First we'll add a few songs. Nothing is required to create the
   * songs collection; it is created automatically when we insert.
   */

  let songs = db.collection('users');

   // Note that the insert method can take either an array or a dict.

});


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
