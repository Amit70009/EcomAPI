var express = require("express");
var userRouter = express.Router();
var ShippingController = require("../Add Shipping/ShippingController");
var mongoose = require("mongoose");

userRouter.post("/add-shipping", async (req, res) => {
    const allParams = req.body;
    var createShipping = await ShippingController.createShipping(allParams);
    res.send({
        status: createShipping.status,
        message: createShipping.message,
        data: createShipping.data
    })
})

module.exports = userRouter
