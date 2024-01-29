var express = require('express');
var router = express.Router();
var user=require('../model/user');

router.post("/register",(req,res)=>{
  user.findOne({userName:req.body.userName}).select('_id userName password')
    .then((result)=>{
      if(result!=null){
        res.send("username already existed in DB")
      }
      else{
        var myuser=new user({
          userName:req.body.userName,
          password:req.body.password,
          email:req.body.email,
          phone:req.body.phone
        })
        myuser.save()
          .then((result)=>res.send("user registered successfully"))
          .catch((err)=>console.log(err))
      
      }
    })
})

router.post("/login",(req,res)=>{
    var uname=req.body.userName
    var pwd=req.body.password
    user.findOne({userName:uname}).select('_id userName password email phone')
    .then((result)=>{
      if(result==null){
        res.send({"res":"user not found"})
      }
      else{
          if(result.password==pwd){
            res.send(result);
          }
          else{
            res.send({"res":"Wrong username or password"})
          }
      }
    })



})







/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
