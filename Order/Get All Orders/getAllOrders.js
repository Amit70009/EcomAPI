var express = require("express");
var userRouter = express.Router();
var fetchOrders = require("../Create order/orderController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-orders", async (req, res) => {
    var FetchOrders = await fetchOrders.GetAllOrder();
    res.send({
        status: FetchOrders.status,
        message: FetchOrders.message,
        data: FetchOrders.data
    })
})

module.exports = userRouter
