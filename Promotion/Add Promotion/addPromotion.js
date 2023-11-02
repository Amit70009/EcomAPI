var express = require("express");
var userRouter = express.Router();
var promotionController = require("../Add Promotion/promotionController");
var mongoose = require("mongoose");

userRouter.post("/add-promotion", async (req, res) => {
    const allParams = req.body;
    var addPromotion = await promotionController.AddPromotion(allParams);
    res.send({
        status: addPromotion.status,
        message: addPromotion.message,
        data: addPromotion.data
    })
})

module.exports = userRouter
