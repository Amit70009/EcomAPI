var express = require("express");
var userRouter = express.Router();
var ShippingController = require("../Add Shipping/ShippingController");
var mongoose = require("mongoose");

userRouter.post("/delete-shipping", async (req, res) => {
    const allParams = req.body;
    var FetchAllShipping = await ShippingController.GetAllShipping(allParams);
    res.send({
        status: FetchAllShipping.status,
        message: FetchAllShipping.message,
        data: FetchAllShipping.data
    })
})

module.exports = userRouter
