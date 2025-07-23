import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
title:{
    type:String
},
brand:{
    type:String
},
Image:{
    type:String
},
price:{
    type:Number
},discription:{
    type:String
},
rating:{
type:Number
},
catagory:{
    type:String
}
});
const productModel= mongoose.model("products",productSchema)
export{productModel};