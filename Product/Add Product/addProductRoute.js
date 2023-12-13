var express = require("express");
// import fileType from "file-type";
const fs = require("fs");
const aws = require("aws-sdk")
aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_ACCESS_ID,
  region: process.env.S3_BUCKET_REGION,
});

const path = require("path");
var productController = require("../Add Product/productController");
var mongoose = require("mongoose");
const multer  = require('multer')
const multerS3 = require("multer-s3")
const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_ACCESS_ID,
  region: process.env.S3_BUCKET_REGION
})


const upload = multer({
  storage: multerS3({
    bucket: "ecomm-bucket-amit", // Update with your bucket name
    s3,
    acl: "public-read",
    key: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
      const fileFormat = path.extname(file.originalname).toLowerCase();
      cb(null, file.fieldname + "-" + uniqueSuffix + fileFormat);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/png"]; // Add more as needed
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Allowed types: JPEG, PNG."), false);
    }
  },
});

var userRouter = express.Router();
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       const dest = '/tmp/productImageUpload/';
      
//       // Create the destination directory if it doesn't exist
//       fs.mkdirSync(dest, { recursive: true });

//       cb(null, dest);
//   },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       const fileFormat = path.extname(file.originalname).toLowerCase();
//       cb(null, file.fieldname + '-' + uniqueSuffix + fileFormat)
//     }
//   })

//   const upload = multer({ storage: storage })

userRouter.post("/add-product", upload.array("productImage"), async (req, res) => {
    const allParams = req.body;
    const productImage = []
    for (let i = 0; i < req.files.length; i++) {
      const productImages = req.files[i].location;
      productImage.push(productImages);
    }
  
    var addProduct = await productController.AddProduct(allParams, productImage);
    res.send({
        status: addProduct.status,
        message: addProduct.message,
        data: addProduct.data
    })
}
)

module.exports = userRouter
