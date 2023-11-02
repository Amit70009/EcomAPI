var express = require("express");
var userRouter = express.Router();
var discountcontroller = require("../Create Discount/discountController");
var mongoose = require("mongoose");

userRouter.post("/delete-discount", async (req, res) => {
    const allParams = req.body;
    var DeleteProduct = await discountcontroller.DeleteDiscount(allParams);
    res.send({
        status: DeleteProduct.status,
        message: DeleteProduct.message,
        data: DeleteProduct.data
    })
})

module.exports = userRouter
