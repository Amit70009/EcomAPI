var express = require("express");
var userRouter = express.Router();
var discountController = require("../Create Discount/discountController");
var mongoose = require("mongoose");

userRouter.post("/add-discount", async (req, res) => {
    const allParams = req.body;
    var addDiscount = await discountController.CreateDiscount(allParams);
    res.send({
        status: addDiscount.status,
        message: addDiscount.message,
        data: addDiscount.data
    })
})

module.exports = userRouter
