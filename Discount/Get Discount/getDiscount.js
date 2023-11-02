var express = require("express");
var userRouter = express.Router();
var fetchDiscount = require("../Create Discount/discountController");
var mongoose = require("mongoose");

userRouter.get("/fetch-discount/:id", async (req, res) => {
    const allParams = req.params.id;
    var FetchDiscount = await fetchDiscount.GetDiscount(allParams);
    res.send({
        status: FetchDiscount.status,
        message: FetchDiscount.message,
        data: FetchDiscount.data
    })
})

module.exports = userRouter
