var express = require("express");
var userRouter = express.Router();
var ShippingController = require("../Add Shipping/ShippingController");
var mongoose = require("mongoose");

userRouter.get("/update-shipping", async (req, res) => {
    const shipping_id = req.params.id;
    const allParams = req.body;
    var FetchAllShipping = await ShippingController.GetAllShipping(shipping_id, allParams);
    res.send({
        status: FetchAllShipping.status,
        message: FetchAllShipping.message,
        data: FetchAllShipping.data
    })
})

module.exports = userRouter
