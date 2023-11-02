var express = require("express");
var userRouter = express.Router();
var CategoryController = require("../Add Category/categoryController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-category", async (req, res) => {
    var FetchCategory = await CategoryController.GetAllCategory();
    res.send({
        status: FetchCategory.status,
        message: FetchCategory.message,
        data: FetchCategory.data
    })
})

module.exports = userRouter
