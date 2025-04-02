import mongoose from "mongoose";
const orderScehma=new mongoose.Schema({

orderPrice:{
    type:Number,
    required:true,
},
Customer:{
    type:String,

},

},{timestamps:true})
export const Order=mongoose.Schema("Order",orderSchema )