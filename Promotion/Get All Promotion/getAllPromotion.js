var express = require("express");
var userRouter = express.Router();
var promotionController = require("../Add Promotion/promotionController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-promotion", async (req, res) => {
    var fetchAllPromotion = await promotionController.GetAllPromotion(req.query);
    res.send({
        status: fetchAllPromotion.status,
        message: fetchAllPromotion.message,
        data: fetchAllPromotion.data
    })
})

module.exports = userRouter
