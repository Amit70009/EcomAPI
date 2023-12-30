var express = require("express");
var userRouter = express.Router();
var productController = require("../Add Product/productController");
var mongoose = require("mongoose");
const aws = require("aws-sdk")

userRouter.delete("/delete-product/:id", async (req, res) => {
    const allParams = req.params.id;
    const product = await productController.fetchProduct(allParams);
    if (!product) {
      return res.status(404).send({
        status: "error",
        message: "Product not found",
      });
    }

    var DeleteProduct = await productController.DeleteProduct(allParams);
    const image_keys = product.data.matchProduct.productImage; 

    if (DeleteProduct.status == "200") {
        const s3 = new aws.S3({
            accessKeyId: process.env.S3_ACCESS_ID,
            secretAccessKey: process.env.S3_ACCESS_KEY,
            region: process.env.S3_BUCKET_REGION
          })
          for (const image_key of image_keys) {
            const filename = image_key.split('/').pop();
      const s3Params = {
        Bucket: "ecomm-bucket-amit",
        Key: filename,
      };
      
          try {
            await s3.deleteObject(s3Params).promise();
            
          } catch (error) {
           throw error
          }
        }

    }
    res.send({
        status: DeleteProduct.status,
        message: DeleteProduct.message,
        data: DeleteProduct.data
    })
})

module.exports = userRouter
