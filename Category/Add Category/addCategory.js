var express = require("express");
var userRouter = express.Router();
var CategoryController = require("../Add Category/categoryController");
var mongoose = require("mongoose");

userRouter.post("/add-category", async (req, res) => {
    const allParams = req.body;
    var addCategory = await CategoryController.AddCategory(allParams);
    res.send({
        status: addCategory.status,
        message: addCategory.message,
        data: addCategory.data
    })
})

module.exports = userRouter
