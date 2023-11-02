var express = require("express");
var userRouter = express.Router();
var ReturnOrderController = require("../Create Return Order/returnOrderController");
var mongoose = require("mongoose");

userRouter.put("/update-return-order/:id", async (req, res) => {
    const Return_OrderID = req.params.id;
    const allParams = req.body;
    var UpdateReturnorder = await ReturnOrderController.UpdateReturnOrder(Return_OrderID, allParams);
    res.send({
        status: UpdateReturnorder.status,
        message: UpdateReturnorder.message,
        data: UpdateReturnorder.data
    })
})

module.exports = userRouter
