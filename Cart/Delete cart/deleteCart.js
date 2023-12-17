var express = require("express");
var userRouter = express.Router();
var cartController = require("../AddCart/cartController");
var mongoose = require("mongoose");

userRouter.post("/delete-cart/:id", async (req, res) => {
    const cartID = req.params.id;
    console.log("deleteCart", cartID);
    var DeleteCart = await cartController.DeleteCart(cartID);
    res.send({
        status: DeleteCart.status,
        message: DeleteCart.message,
        data: DeleteCart.data
    })
})

module.exports = userRouter
