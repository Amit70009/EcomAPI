var express = require("express");
var userRouter = express.Router();
var UserController = require("../Login Function/controller");
var mongoose = require("mongoose");
const multer = require('multer');
var UserSchema = require("../Login Function/Model").usermodel;
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./Constant/Images")
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
}
)

const upload = multer({ storage: storage });

userRouter.post("/update", upload.single('profileImage'), async (req, res) => {
  try {
    var UpdateProf = await UserSchema.updateOne({
        email: req.body.email
    }, {
        $set: {
            full_name: req.body.full_name,
            profile_pic: req.body.profile_pic,
            gender: req.body.gender,
            billing_address: req.body.billing_address,
            shipping_address: req.body.shipping_address,
            password: req.body.password,
            role: req.body.role,
            mobile: req.body.mobile,
            isUserActive: req.body.isUserActive
            
        }
    })
  // console.log(UpdateProf);
    if(UpdateProf){
        return{
            status: "200",
            Message: "User Updated successfully"
        }
    }
  } catch (error) {
    console.log(error);
    return {
        status: 500, 
        message: "Internal Server Error"
    };
  }
})

module.exports = userRouter
