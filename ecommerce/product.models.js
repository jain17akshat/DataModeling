import mongoose from "mongoose";
const productSchema=new mongoose.Schema({

description:{
    type:String,
    required:String,

},
name:{
    type:String,
    required:String,
},
productImage:{
  type:String
},
price:{
    type:SVGAnimatedNumber,

},
stock:{
    default:0,
    type:Number,

},
category:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Category",
     required:true,

},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",

},


},{timestamps:true})
export const Product=mongoose.model("Product",productSchema)