var mongoUrl = "mongodb+srv://EcommApp:f6VZGWiTQM75xnZg@e-commerce.jkid7lq.mongodb.net/?retryWrites=true&w=majority"; // Paste cloud mongo url
var portNo = 7383;
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

async function encryptPassword(password){
    if(password){
        var encPas = bcrypt.hash(password, 10);
        return encPas;
    }
    else{
        return "";
    }
}

async function decryptPassword(reqPassword, userSavedPassword){
    if(reqPassword && userSavedPassword){
        var decPass = bcrypt.compare(reqPassword, userSavedPassword);
        return decPass
    }
    else{
        return "";
    }
}

function generateToken(payload){
    if(payload){
        var gTok = jwt.sign(payload, "weekendMern@123", {
            algorithm: "HS256",
            expiresIn: 3600
        })
        return gTok;
    }
    else{
        return "";
    }
}

module.exports = {
    mongoUrl,
    portNo, 
    encryptPassword, 
    decryptPassword, 
    generateToken
}