var express = require("express");
var userRouter = express.Router();
var productController = require("../Add Product/productController");
var mongoose = require("mongoose");

userRouter.post("/delete-product", async (req, res) => {
    const allParams = req.body;
    var DeleteProduct = await productController.DeleteProduct(allParams);
    res.send({
        status: DeleteProduct.status,
        message: DeleteProduct.message,
        data: DeleteProduct.data
    })
})

module.exports = userRouter
