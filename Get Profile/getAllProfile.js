var express = require("express");
var fetchUser = express.Router();
var fetchController = require("../Login Function/controller");
var mongoose = require("mongoose");

fetchUser.get("/all-profile", async (req, res) => {
    var callProfile = await fetchController.fetchAllProfile();
    res.send({
        status: callProfile.status,
        message: callProfile.message,
        data: callProfile.data
    })
})

module.exports = fetchUser
