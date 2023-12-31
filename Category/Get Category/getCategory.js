var express = require("express");
var userRouter = express.Router();
var CategoryController = require("../Add Category/categoryController");
var mongoose = require("mongoose");

userRouter.get("/fetch-category/:id", async (req, res) => {
    const allParams = req.params.id;
    var FetchCategory = await CategoryController.GetCategory(allParams);
    res.send({
        status: FetchCategory.status,
        message: FetchCategory.message,
        data: FetchCategory.data
    })
})

module.exports = userRouter
