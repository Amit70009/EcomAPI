var express = require("express");
var userRouter = express.Router();
var orderController = require("../Create order/orderController");
var mongoose = require("mongoose");

userRouter.post("/delete-order", async (req, res) => {
    const allParams = req.body;
    var Deleteorder = await orderController.DeleteOrder(allParams);
    res.send({
        status: Deleteorder.status,
        message: Deleteorder.message,
        data: Deleteorder.data
    })
})

module.exports = userRouter
