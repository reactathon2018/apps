const UserdetailsInfo = require('../models/user.model');
var bodyParser = require('body-parser');
const bcrypt=require('bcrypt-nodejs');

exports.userdetails = function (req, res) {
    UserdetailsInfo.find({},function (err, userInfo) {   
       if (err) return next(err);       
        res.send(userInfo);
    });
};

exports.user_create = function (req, res) {     
    let Password = bcrypt.hashSync(req.body.Password);
    let userdetailsInfo = new UserdetailsInfo(
        {
            UserId:req.body.UserId,
            Password:Password,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            ContactNumber: req.body.ContactNumber,
            Organization: req.body.Organization,
            Role:"USER",
            Active:true
        }
    );
    userdetailsInfo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully');
    
    });
};

exports.login = (req,res)=>{
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    UserdetailsInfo.findOne({Email:req.body.Email,Password:req.body.Password},(err,userInfo)=>{
        console.log('fff',userInfo);
        if(err){
            res.send('Failed Authentication');    
        }
        else{
            if(userInfo === null){
               res.send('Failed Authentication');  
            }
           else{
               return res.send('Authenticated');
           }
         }   
    });
};
exports.profile = (req,res)=>{
    return res.send('GET profile');
};
    
