var express = require("express");
var userRouter = express.Router();
var fetchProduct = require("../Add Product/productController");
var mongoose = require("mongoose");

userRouter.get("/fetch-product/:id", async (req, res) => {
    const allParams = req.params.id;
    var FetchProduct = await fetchProduct.fetchProduct(allParams);
    res.send({
        status: FetchProduct.status,
        message: FetchProduct.message,
        data: FetchProduct.data
    })
})

module.exports = userRouter
