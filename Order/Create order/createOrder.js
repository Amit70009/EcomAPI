var express = require("express");
var userRouter = express.Router();
var orderController = require("../Create order/orderController");
var mongoose = require("mongoose");

userRouter.post("/create-order", async (req, res) => {
    const allParams = req.body;
    var createOrder = await orderController.createOrder(allParams);
    res.send({
        status: createOrder.status,
        message: createOrder.message,
        data: createOrder.data
    })
})

module.exports = userRouter
