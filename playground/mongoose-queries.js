const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b9ac6914ae28e0958b77305rr';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// }
// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5b916f62af808904b0c72bc3').then((user) => {
  if(!user){
    console.log('Id not found');
  }
  console.log('User by id', user);
}, (e) => {
  console.log(e);
});
