var express = require("express");
var userRouter = express.Router();
var fetchOrder = require("../Create order/orderController");
var mongoose = require("mongoose");

userRouter.get("/fetch-order/:id", async (req, res) => {
    const allParams = req.params.id;
    var FetchOrder = await fetchOrder.GetOrder(allParams);
    res.send({
        status: FetchOrder.status,
        message: FetchOrder.message,
        data: FetchOrder.data
    })
})

module.exports = userRouter
