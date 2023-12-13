var express = require("express");
var userRouter = express.Router();
var fetchProduct = require("../Add Product/productController");
var mongoose = require("mongoose");

userRouter.get("/fetch-all-product", async (req, res) => {
    var FetchProduct = await fetchProduct.fetchAllProduct(req.query);
    res.send({
        status: FetchProduct.status,
        message: FetchProduct.message,
        data: FetchProduct.data
    })
})

module.exports = userRouter
