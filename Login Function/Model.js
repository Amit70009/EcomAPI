const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, require: true },
    mobile: { type: Number, MaxKey: 10, require: true},
    password: { type: String },
    role: {type:String, default:"Shopper"},
    acc_token: {type: String},
    isUserActive: { type: Boolean },
    profileImage: {data: Buffer,
        contentType: String,},
    gender: {type: String},
    createdOn: {type: Date, default: new Date()},
    billing_address: [{
        address1: {type: String, required: true},
        address2: {type: String},
        address3: {type: String},
        city: {type: String, required: true},
        state: {type: String, required: true},
        postal_code: {type: String, required: true},
        country_code: {type: String, MinKey: 2, MaxKey: 3}, 
    }],
    shipping_address: [{
        address1: {type: String, required: true},
        address2: {type: String},
        address3: {type: String},
        city: {type: String, required: true},
        state: {type: String, required: true},
        postal_code: {type: String, required: true},
        country_code: {type: String, MinKey: 2, MaxKey: 3},
        address_type: {type: String}    
    }],
});
var usermodel = mongoose.model("users", userSchema);

module.exports = {
    usermodel
}
