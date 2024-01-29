var express = require('express');
var router = express.Router();
var product=require('../model/product');
router.get("/hello",(req,res)=>{
  res.end("Hello world")
})

router.get("/product",(req,res)=>{

    product.find({})
            .then((result)=>res.send(result))
            .catch((err)=>console.log(err))
})

router.post("/product",(req,res)=>{
 
  var myproduct = new product({
    productId:req.body.productId,
    productName:req.body.productName,
    productCompany:req.body.productCompany,
    productPrice:req.body.productPrice,
    productImage:req.body.productImage,
    productFlag:false
  })

  myproduct.save()
            .then((result)=>res.end("product added"))
            .catch((err)=>console.log(err))
})

router.put("/product/:bs",(req,res)=>{
  pid=req.params.bs;

  var myproduct =new product({
    _id:pid,
    productId:req.body.productId,
    productName:req.body.productName,
    productCompany:req.body.productCompany,
    productPrice:req.body.productPrice,
    productImage:req.body.productImage,
    productFlag:false
  })

  product.findByIdAndUpdate(pid,myproduct)
          .then((result)=>res.send("updated successfully"))
          .catch((err)=>console.log(err));

})

router.delete("/product/:id",(req,res)=>{

  pid=req.params.id;

  product.findByIdAndDelete(pid)
          .then((result)=>res.send("deleted successfully"))
          .catch((err)=>console.log(err));

})

router.get("/product/:id",(req,res)=>{

  pid=req.params.id;

  product.findOne({_id:pid}).select("_id productId productName productPrice")
  .then((result)=>res.send(result))
  .catch((err)=>console.log(err));

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
