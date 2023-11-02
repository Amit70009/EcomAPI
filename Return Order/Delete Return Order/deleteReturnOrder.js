var express = require("express");
var userRouter = express.Router();
var ReturnOrderController = require("../Create Return Order/returnOrderController");
var mongoose = require("mongoose");

userRouter.post("/delete-return-order", async (req, res) => {
    const allParams = req.body;
    var DeleteReturnorder = await ReturnOrderController.DeleteReturnOrder(allParams);
    res.send({
        status: DeleteReturnorder.status,
        message: DeleteReturnorder.message,
        data: DeleteReturnorder.data
    })
})

module.exports = userRouter
