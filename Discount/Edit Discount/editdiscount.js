var express = require("express");
var userRouter = express.Router();
var discountController = require("../Create Discount/discountController");
var mongoose = require("mongoose");

userRouter.put("/update-discount/:id", async (req, res) => {
    const discountID = req.params.id;
    const allParams = req.body;
    var UpdateDiscount = await discountController.UpdateDiscount(discountID, allParams);
    res.send({
        status: UpdateDiscount.status,
        message: UpdateDiscount.message,
        data: UpdateDiscount.data
    })
})

module.exports = userRouter
