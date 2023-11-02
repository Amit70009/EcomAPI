const { ObjectID, UUID } = require("bson");
const express = require("express")
var UserSchema = require("../Login Function/Model").usermodel;
var CommonFunc = require("../Common Function/commonfunction");

/* For Register */
async function userRegister(data){
    try {
        var checkUserData = await UserSchema.find({
            $or: [{email: data.email}, {mobile: data.mobile}]
        });
        if(checkUserData.length){
            return {
                status: 201,
                message: "User already registered with this email or mobile",
                data: {}
            }
        }
        let encryptPass = await CommonFunc.encryptPassword(data.password);
        var regObj = {
            full_name: data.full_name,
            email: data.email,
            role: data.role,
            mobile: data.mobile,
            gender: data.gender,
            password: encryptPass,
            createdOn: new Date(),
            shipping_address: data.shipping_address,
            billing_address: data.billing_address,
        }

        await UserSchema.create(regObj);

        // Send email to that user email :

        return {
            status: 200,
            message: "Registration successfully",
            data: {}
        }
    } catch (error) {
        console.log(error);
        throw error
    }
};

module.exports = { userRegister }
