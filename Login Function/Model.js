const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var billingAddressSchema = new mongoose.Schema({
    street1: { type: String, required: true},
    street2: { type: String},
    street3: { type: String},
    city: { type: String },
    state: {type: String},
    postalcode: {type: String}
});

var shippingAddressSchema = new mongoose.Schema({
    street1: { type: String, required: true},
    street2: { type: String},
    street3: { type: String},
    city: { type: String },
    state: {type: String},
    postalcode: {type: String}
});


var userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, require: true },
    mobile: { type: Number, MaxKey: 10, require: true},
    password: { type: String },
    role: {type:String, default:"Shopper"},
    acc_token: {type: String},
    isUserActive: { type: Boolean },
    profileImage: {type: String},
    gender: {type: String},
    createdOn: {type: Date, default: new Date()},
    billing_address: [billingAddressSchema],
    shipping_address: [shippingAddressSchema]
});
var usermodel = mongoose.model("users", userSchema);

module.exports = {
    usermodel
}
