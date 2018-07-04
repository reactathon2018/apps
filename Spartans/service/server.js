import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ToDo from './mongoose/todo';
import Login from './mongoose/login';
import UserDetails from './mongoose/users';
import schema from './graphql/Schema/Schema';
import loginschema from './graphql/Schema/LoginSchema';
import userschema from './graphql/Schema/UserSchema';
import cors from 'cors';

const app = express();

import {graphql} from 'graphql'
import graphqlHTTP from 'express-graphql';

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/reactathon')

var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
	console.log( '+++Connected to mongoose')
})

app.listen(3000,()=> {console.log("+++Express Server is Running!!!")})

app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html')
})

app.use('/graphql' , cors(), graphqlHTTP (req => ({
	schema    
	//,graphiql:true
})))
// req.header("Access-Control-Allow-Origin", "*");
//	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"//
//app.use('/graphql', cors(), graphqlHttp(() => ({
//    schema: schema
//})));

app.post('/quotes',(req,res)=>{
	// Insert into TodoList Collection
	var todoItem = new ToDo({
		itemId:1,
		item:req.body.item,
		completed: false
	})

	todoItem.save((err,result)=> {
		if (err) {console.log("---TodoItem save failed " + err)}
		console.log("+++TodoItem saved successfully "+todoItem.item)

		res.redirect('/')
	})
})



app.post('/insertlogin',(req,res)=>{
	var loginItem = new Login({
		userId: req.body.userId,
		vzid: req.body.vzid,
		pass: req.body.pass,
		token: "xxxxxxxxx"
	})

	loginItem.save((err,result)=> {
		if (err) {console.log("---Login save failed " + err)}
		console.log("+++Login saved successfully "+loginItem.vzid)

		res.redirect('/')
	})
})

app.use('/loginql', graphqlHTTP (req => ({
	loginschema
	//,graphiql:true
})))


app.use('/userql', graphqlHTTP (req => ({
	userschema
	//,graphiql:true
})))

app.post('/insertuser',(req,res)=>{
	var userItem = new UserDetails({
		empId: req.body.empId,
		vzid: req.body.vzid,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		reportsTo: req.body.reportsTo,
		events: [{ eventId: 1,  eventName: "Reactathon",  status: "InProgess", completed: false,create_dt:"12/12/2018 12:12:90"}],		
		history: [{ eventId: 1,  eventName: "Reactathon",  status: "InProgess", completed: false,create_dt: "12/12/2018 12:12:90"}]
	})
  	userItem.save((err,result)=> {
		if (err) {console.log("---User save failed " + err)}
		console.log("+++User saved successfully "+userItem.vzid)

		res.redirect('/')
	})
})