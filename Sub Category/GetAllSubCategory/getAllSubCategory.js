var express = require("express");
var userRouter = express.Router();
var SubCategoryController = require("../Add Sub-Category/subCategoryController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-sub-category", async (req, res) => {
    var FetchAllSubCategory = await SubCategoryController.GetAllSubCategory(req.query);
    res.send({
        status: FetchAllSubCategory.status,
        message: FetchAllSubCategory.message,
        data: FetchAllSubCategory.data
    })
})

module.exports = userRouter
