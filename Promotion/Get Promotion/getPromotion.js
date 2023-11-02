var express = require("express");
var userRouter = express.Router();
var promotionController = require("../Add Promotion/promotionController");
var mongoose = require("mongoose");

userRouter.get("/fetch-promotion/:id", async (req, res) => {
    const allParams = req.params.id;
    var fetchPromotion = await promotionController.GetPromotion(allParams);
    res.send({
        status: fetchPromotion.status,
        message: fetchPromotion.message,
        data: fetchPromotion.data
    })
})

module.exports = userRouter
