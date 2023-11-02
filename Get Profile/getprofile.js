var express = require("express");
var fetchUser = express.Router();
var fetchController = require("../Login Function/controller");
var mongoose = require("mongoose");

fetchUser.get("/profile", async (req, res) => {
    const allParams = req.query;
    var callProfile = await fetchController.fetchProfile(allParams);
    res.send({
        status: callProfile.status,
        message: callProfile.message,
        data: callProfile.data
    })
})

module.exports = fetchUser
