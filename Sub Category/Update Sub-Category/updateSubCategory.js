var express = require("express");
var userRouter = express.Router();
var SubCategoryController = require("../Add Sub-Category/subCategoryController");
var mongoose = require("mongoose");

userRouter.put("/update-sub-category/:id", async (req, res) => {
    const CategoryID = req.params.id;
    const allParams = req.body;
    var updateSubCategory = await SubCategoryController.UpdateSubCategory(CategoryID, allParams);
    res.send({
        status: updateSubCategory.status,
        message: updateSubCategory.message,
        data: updateSubCategory.data
    })
})

module.exports = userRouter
