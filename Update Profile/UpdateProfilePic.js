var express = require("express");
var userRouter = express.Router();
const path = require('path');
var UserController = require("../Login Function/controller");
var mongoose = require("mongoose");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const fileFormat = path.extname(file.originalname).toLowerCase();
      cb(null, file.fieldname + '-' + uniqueSuffix + fileFormat)
    }
  })
  
  const upload = multer({ storage: storage })

userRouter.put("/update-profile-pic/:id", upload.single('profileImage'), async (req, res) => {
    const userID = req.params.id;
    const allParams = req.file.filename;
    var updateUser = await UserController.UpdateProfilePic(userID, {}, allParams);
    res.send({
        status: updateUser.status,
        message: updateUser.message,
        data: updateUser.data
    })
   console.log("All Params", allParams);
})

module.exports = userRouter
