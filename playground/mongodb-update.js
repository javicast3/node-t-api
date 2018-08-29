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

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b86b69112b43fe581b5ebef')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('User').findOneAndUpdate({
  _id: new ObjectID('5b85445718359904d8d9af97')
}, {$set: {name: 'Jose'},
    $inc: {age: 3}},
   {returnOriginal: false}).then((result) => {
  console.log(result);
});
  //db.close();
});
