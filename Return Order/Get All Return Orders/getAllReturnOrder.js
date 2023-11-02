var express = require("express");
var userRouter = express.Router();
var ReturnOrderController = require("../Create Return Order/returnOrderController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-return-orders", async (req, res) => {
    var FetchReturnOrders = await ReturnOrderController.GetAllReturnOrder();
    res.send({
        status: FetchReturnOrders.status,
        message: FetchReturnOrders.message,
        data: FetchReturnOrders.data
    })
})

module.exports = userRouter
