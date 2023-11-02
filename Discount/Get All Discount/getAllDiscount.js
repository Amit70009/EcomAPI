var express = require("express");
var userRouter = express.Router();
var fetchDiscount = require("../Create Discount/discountController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-discount", async (req, res) => {
    var FetchDiscount = await fetchDiscount.GetAllDiscount();
    res.send({
        status: FetchDiscount.status,
        message: FetchDiscount.message,
        data: FetchDiscount.data
    })
})

module.exports = userRouter
