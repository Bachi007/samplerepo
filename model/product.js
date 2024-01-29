var mongo=require('mongoose');

var Schema=mongo.Schema;

var productSchema= new Schema({
    productId:String,
    productName:String,
    productCompany:String,
    productPrice:String,
    productImage:String,
    productFlag:Boolean,
})

var product=mongo.model('product',productSchema);

module.exports=product;
