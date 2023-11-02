var express = require("express");
var userRouter = express.Router();
var ReturnOrderController = require("../Create Return Order/returnOrderController");
var mongoose = require("mongoose");

userRouter.get("/fetch-return-order/:id", async (req, res) => {
    const allParams = req.params.id;
    var FetchReturnOrder = await ReturnOrderController.GetReturnOrder(allParams);
    res.send({
        status: FetchReturnOrder.status,
        message: FetchReturnOrder.message,
        data: FetchReturnOrder.data
    })
})

module.exports = userRouter
