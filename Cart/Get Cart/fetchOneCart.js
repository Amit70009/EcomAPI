var express = require("express");
var userRouter = express.Router();
var cartController = require("../AddCart/cartController");
var mongoose = require("mongoose");

userRouter.get("/fetch-cart/:id", async (req, res) => {
   
    const userID = req.params.id
    var FetchCart = await cartController.fetchCart(userID);
    res.send({
        status: FetchCart.status,
        message: FetchCart.message,
        data: FetchCart.data
    })
})

module.exports = userRouter
