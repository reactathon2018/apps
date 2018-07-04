import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// create a schema
var loginSchema = new Schema({
    userId: Number,
    vzid: String,
    pass: String,
    token: String
}, {collection:"login"});

// the schema is useless so far
// we need to create a model using it
var Login = mongoose.model('login', loginSchema);

export default Login

// Select an item from TodoList collection
// ToDo.find({item:"Gethyl"},(err,res)=>{
// 	if (err){console.log("---Gethyl not found in ToDo" + err)}
// 	else console.log("+++Gethyl fetched ==> " + res)
// })	

