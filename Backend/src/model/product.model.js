const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    title:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
   quantity:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})


module.exports = mongoose.model('Product',ProductSchema);