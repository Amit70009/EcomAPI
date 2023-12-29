var express = require("express");
var userRouter = express.Router();
var cartController = require("../AddCart/cartController");
var mongoose = require("mongoose");

userRouter.get("/fetch-cart-by-product-code/:userId/:productId", async (req, res) => {
    const userID = req.params.userId
    const ProductID = req.params.productId
    var FetchCart = await cartController.fetchCartByProductCode(userID, ProductID);
    res.send({
        status: FetchCart.status,
        message: FetchCart.message,
        data: FetchCart.data
    })
})

module.exports = userRouter
