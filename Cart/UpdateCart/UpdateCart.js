var express = require("express");
var userRouter = express.Router();
var cartController = require("../AddCart/cartController");
var mongoose = require("mongoose");

userRouter.put("/update-cart/:id", async (req, res) => {
    const cartID = req.params.id;
    const allParams = req.body;
    var updateCart = await cartController.UpdateCart(cartID, allParams);
    res.send({
        status: updateCart.status,
        message: updateCart.message,
        data: updateCart.data
    })
})

module.exports = userRouter
