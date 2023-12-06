var express = require("express");
var userRouter = express.Router();
var ShippingController = require("../Add Shipping/ShippingController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-shipping", async (req, res) => {
    var FetchAllShipping = await ShippingController.GetAllShipping();
    res.send({
        status: FetchAllShipping.status,
        message: FetchAllShipping.message,
        data: FetchAllShipping.data
    })
})

module.exports = userRouter
