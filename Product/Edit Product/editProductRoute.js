var express = require("express");
var userRouter = express.Router();
var productController = require("../Add Product/productController");
var mongoose = require("mongoose");

userRouter.put("/update-product/:id", async (req, res) => {
    const productId = req.params.id;
    const allParams = req.body;
    var UpdateProduct = await productController.EditProduct(productId, allParams);
    res.send({
        status: UpdateProduct.status,
        message: UpdateProduct.message,
        data: UpdateProduct.data
    })
})

module.exports = userRouter
