var express = require("express");
var userRouter = express.Router();
var orderController = require("../Create order/orderController");
var mongoose = require("mongoose");

userRouter.put("/update-order/:id", async (req, res) => {
    const OrderID = req.params.id;
    const allParams = req.body;
    var Updateorder = await orderController.UpdateOrder(OrderID, allParams);
    res.send({
        status: Updateorder.status,
        message: Updateorder.message,
        data: Updateorder.data
    })
})

module.exports = userRouter
