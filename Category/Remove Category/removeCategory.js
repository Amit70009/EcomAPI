var express = require("express");
var userRouter = express.Router();
var CategoryController = require("../Add Category/categoryController");
var mongoose = require("mongoose");

userRouter.post("/delete-category", async (req, res) => {
    const allParams = req.body;
    var DeleteCategory = await CategoryController.RemoveCategory(allParams);
    res.send({
        status: DeleteCategory.status,
        message: DeleteCategory.message,
        data: DeleteCategory.data
    })
})

module.exports = userRouter
