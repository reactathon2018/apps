import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    empId: Number,
    vzid: String,
    firstname: String,
    lastname: String,
    reportsTo: String,
    events : [{ eventId: Number,  eventName: String,  status: String, completed: Boolean,create_dt: String}],
    history : [{ eventId: Number,  eventName: String,  status: String, completed: Boolean,create_dt: String}]
}, {collection:"UserDetails"});

// the schema is useless so far
// we need to create a model using it
var UserDetails = mongoose.model('UserDetails', UserSchema);

export default UserDetails

// Select an item from TodoList collection
// ToDo.find({item:"Gethyl"},(err,res)=>{
// 	if (err){console.log("---Gethyl not found in ToDo" + err)}
// 	else console.log("+++Gethyl fetched ==> " + res)
// })	