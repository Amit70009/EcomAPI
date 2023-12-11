var express = require("express");
var userRouter = express.Router();
const path = require("path");
var productController = require("../Add Product/productController");
var mongoose = require("mongoose");
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      const dest = '/tmp/productImageUpload/';
      
      // Create the destination directory if it doesn't exist
      fs.mkdirSync(dest, { recursive: true });

      cb(null, dest);
  },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const fileFormat = path.extname(file.originalname).toLowerCase();
      cb(null, file.fieldname + '-' + uniqueSuffix + fileFormat)
    }
  })

  const upload = multer({ storage: storage })

userRouter.post("/add-product", upload.array("productImage"), async (req, res) => {
    const allParams = req.body;
    const productImage = []
    for (let i = 0; i < req.files.length; i++) {
      const productImages = req.files[i].name;
      productImage.push(productImages);
    }

    

  
    var addProduct = await productController.AddProduct(allParams, productImage);
    res.send({
        status: addProduct.status,
        message: addProduct.message,
        data: addProduct.data
    })
})

module.exports = userRouter
