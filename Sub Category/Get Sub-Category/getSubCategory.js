var express = require("express");
var userRouter = express.Router();
var SubCategoryController = require("../Add Sub-Category/subCategoryController");
var mongoose = require("mongoose");

userRouter.get("/fetch-sub-category/:id", async (req, res) => {
    const allParams = req.params.id;
    var FetchSubCategory = await SubCategoryController.GetSubCategory(allParams);
    res.send({
        status: FetchSubCategory.status,
        message: FetchSubCategory.message,
        data: FetchSubCategory.data
    })
})

module.exports = userRouter
