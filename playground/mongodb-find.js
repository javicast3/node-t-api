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

// db.collection('Todos').find({
//   _id: new ObjectID('5b840855f24b3e0798f90d73')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to feth Todos ', err);
// });

db.collection('Todos').find().count().then((count) => {
  console.log(`Todos Count:  ${count}`);
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to feth Todos ', err);
});

  //db.close();
});
