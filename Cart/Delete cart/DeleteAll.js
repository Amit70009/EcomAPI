var express = require("express");
var userRouter = express.Router();
var cartController = require("../AddCart/cartController");
var mongoose = require("mongoose");

userRouter.delete("/delete-all-cart/:id", async (req, res) => {
    const userID = req.params.id;
    var DeleteCart = await cartController.DeleteAllCart(userID);
    res.send({
        status: DeleteCart.status,
        message: DeleteCart.message,
        data: DeleteCart.data
    })
})

module.exports = userRouter
