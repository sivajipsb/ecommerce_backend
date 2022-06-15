const express = require('express');
const connect = require('./configs/db');
const cors= require("cors")

const app = express();

const port=process.env.PORT || 2345

app.use(express.json());
app.use(express.static("public"))
app.use(cors());

const UserController = require('./controllers/user.controller')
const ProductController = require('./controllers/product.controller')
const CartController = require("./controllers/cart.controller")


app.use("/auth",UserController);
app.use("/products", ProductController);
app.use("/cart",CartController)






app.listen(port, async (req,res) => {
    try{
       await connect()
        console.log("listening on port 2345")
    }catch(e){
        res.send(e)
    }
})