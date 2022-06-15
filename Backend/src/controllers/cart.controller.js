const express = require('express');
const router = express.Router();
const Cartmodel = require("../model/cart.model")

router.post("/",async (req,res) => {
    try{
        let cart = await Cartmodel.create(req.body);
        return res.send(cart)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let cart = await Cartmodel.find().populate("productId").lean().exec();
        return res.send(cart)
    }
    catch(e){
        return res.send(e)
    }
})
router.delete("/:id",async (req,res) => {
    try{
        const id =res.params.id
        let cart = await Cartmodel.find(id).lean().exec();
        return res.send(cart)
    }
    catch(e){
        return res.send(e)
    }
})





module.exports = router;