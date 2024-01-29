var mongo=require('mongoose');

var Schema=mongo.Schema;

var userSchema= new Schema({
    userName:String,
    password:String,
    email:String,
    phone:String
})

var user=mongo.model('users',userSchema);

module.exports=user;
