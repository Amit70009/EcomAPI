var express = require("express");
var userRouter = express.Router();
var CategoryController = require("../Add Category/categoryController");
var mongoose = require("mongoose");

userRouter.put("/update-category/:id", async (req, res) => {
    const CategoryID = req.params.id;
    const allParams = req.body;
    var updateCategory = await CategoryController.UpdateCategory(CategoryID, allParams);
    res.send({
        status: updateCategory.status,
        message: updateCategory.message,
        data: updateCategory.data
    })
})

module.exports = userRouter
