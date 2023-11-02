var express = require("express");
var userRouter = express.Router();
var ReturnOrderController = require("../Create Return Order/returnOrderController");
var mongoose = require("mongoose");

userRouter.post("/create-return-order", async (req, res) => {
    const allParams = req.body;
    var createReturnOrder = await ReturnOrderController.createReturnOrder(allParams);
    res.send({
        status: createReturnOrder.status,
        message: createReturnOrder.message,
        data: createReturnOrder.data
    })
})

module.exports = userRouter
