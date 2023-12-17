var express = require("express");
var userRouter = express.Router();
var cartController = require("../AddCart/cartController");
var mongoose = require("mongoose");

userRouter.post("/add-to-cart", async (req, res) => {
    const allParams = req.body;
    var addCart = await cartController.AddCart(allParams);
    res.send({
        status: addCart.status,
        message: addCart.message,
        data: addCart.data
    })
})

module.exports = userRouter
