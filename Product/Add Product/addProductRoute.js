var express = require("express");
var userRouter = express.Router();
var productController = require("../Add Product/productController");
var mongoose = require("mongoose");

userRouter.post("/add-product", async (req, res) => {
    const allParams = req.body;
    var addProduct = await productController.AddProduct(allParams);
    res.send({
        status: addProduct.status,
        message: addProduct.message,
        data: addProduct.data
    })
})

module.exports = userRouter
