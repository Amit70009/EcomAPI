var express = require("express");
var userRouter = express.Router();
var promotionController = require("../Add Promotion/promotionController");
var mongoose = require("mongoose");

userRouter.put("/update-promotion/:id", async (req, res) => {
    const PromotionID = req.params.id;
    const allParams = req.body;
    var updatePromotion = await promotionController.UpdatePromotion(PromotionID, allParams);
    res.send({
        status: updatePromotion.status,
        message: updatePromotion.message,
        data: updatePromotion.data
    })
})

module.exports = userRouter
