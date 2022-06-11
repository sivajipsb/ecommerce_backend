const express = require('express');
const router = express.Router();
const Product = require('../model/product.model');

router.post("/",async (req,res) => {
    try{
        let product = await Product.create(req.body);
        return res.send(product)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let product = await Product.find().lean().exec();
        return res.send(product)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/:id",async (req,res) => {
    try{
        let product = await Product.findOne({_id:req.params.id});
        return res.send(mobile)
    }
    catch(e){
        return res.send(e)
    }
})




module.exports = router;