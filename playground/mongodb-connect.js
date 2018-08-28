//const MongoClient = require('mongodb').MongoClient;

//identical to the code up above, using destructuring:
//const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('User').insertOne({
    name: 'javier',
    age: 35,
    location: 'Argentina'
  }, (err, result) => {
    if (err){
      console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
