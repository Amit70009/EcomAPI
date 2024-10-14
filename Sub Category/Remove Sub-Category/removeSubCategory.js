var express = require("express");
var userRouter = express.Router();
var SubCategoryController = require("../Add Sub-Category/subCategoryController");
var mongoose = require("mongoose");

userRouter.post("/delete-category", async (req, res) => {
    const allParams = req.body;
    var DeleteSubCategory = await SubCategoryController.RemoveSubCategory(allParams);
    res.send({
        status: DeleteSubCategory.status,
        message: DeleteSubCategory.message,
        data: DeleteSubCategory.data
    })
})

module.exports = userRouter
