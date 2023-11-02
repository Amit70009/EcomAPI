var express = require("express");
var userRouter = express.Router();
var promotionController = require("../Add Promotion/promotionController");
var mongoose = require("mongoose");

userRouter.post("/delete-promotion", async (req, res) => {
    const allParams = req.body;
    var deletePromotion = await promotionController.DeletePromotion(allParams);
    res.send({
        status: deletePromotion.status,
        message: deletePromotion.message,
        data: deletePromotion.data
    })
})

module.exports = userRouter
