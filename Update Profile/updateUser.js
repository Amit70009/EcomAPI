var express = require("express");
var userRouter = express.Router();
var UserController = require("../Login Function/controller");
var mongoose = require("mongoose");

userRouter.put("/update-profile/:id", async (req, res) => {
    const userID = req.params.id;
    const allParams = req.body;
    var updateUser = await UserController.UpdateProfile(userID, allParams);
    res.send({
        status: updateUser.status,
        message: updateUser.message,
        data: updateUser.data
    })
})

module.exports = userRouter
