var express = require("express");
var userRouter = express.Router();
var CategoryController = require("../Add Category/categoryController");
var mongoose = require("mongoose");
const fs = require("fs");
const aws = require("aws-sdk")
aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_ACCESS_ID,
  region: process.env.S3_BUCKET_REGION,
});

const path = require("path");
const multer  = require('multer')
const multerS3 = require("multer-s3")
const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_ACCESS_ID,
  region: process.env.S3_BUCKET_REGION
})

const upload = multer({
  storage: multerS3({
    bucket: "ecomm-bucket-amit",
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

userRouter.post("/add-category", upload.single("category_image"), async (req, res) => {
    const allParams = req.body;
    const categoryImage = req.file.location;
    var addCategory = await CategoryController.AddCategory(allParams, categoryImage);
    res.send({
        status: addCategory.status,
        message: addCategory.message,
        data: addCategory.data
    })
})

module.exports = userRouter
