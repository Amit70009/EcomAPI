var promotionSchema = require("./promotionmodel").promotionModel
const { model } = require("mongoose");
var CommonFunc = require("../../Common Function/commonfunction.js");

async function AddPromotion(data){
    try {
        var promotionCheck = await promotionSchema.find({
            promotion_code: data.promotion_code
        },{createdOn: 0, __v: 0})
        if(promotionCheck.length){
            return{
                status: 200,
                message: "Promotion Code Already Exists",
                data: {promotionCheck}
            }
        }

        var promotionCreate = {
            promotion_code: data.promotion_code,
  promotion_name: data.promotion_name,
  promotion_description: data.promotion_description,
  isPromotionEnabled: data.isPromotionEnabled
        }

        await promotionSchema.create(promotionCreate);
        {
            return{
                status: 200,
                message: "Promotion has been created successfully",
                data: {promotionCreate}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function UpdatePromotion(PromotionID, data){
    try {
        var promotionCheck = await promotionSchema.findOneAndUpdate({
            promotion_code: PromotionID
        }, {
            $set:{
                promotion_name: data.promotion_name,
  promotion_description: data.promotion_description,
  isPromotionEnabled: data.isPromotionEnabled 
            }
        }, {
            new: true
        })
        if(promotionCheck){
            return{
                status: 200,
                message: "Promotion has been updated successfully",
                data: {promotionCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function GetPromotion(data){
    try {
        var promotionCheck = await promotionSchema.findOne({
            promotion_code: data
        });
        if(promotionCheck){
            return{
                status: 200,
                message: "Promotion Fetched Successfully",
                data: {promotionCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function GetAllPromotion(data, queryParams){
    try {
        const filter = { ...queryParams };
        var promotionCheck = await promotionSchema.find(filter);
        if(promotionCheck){
            return{
                status: 200,
                message: "All Promotion Fetched Successfully",
                data: {promotionCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function DeletePromotion(data){
    try {
        var promotionCheck = await promotionSchema.findOneAndDelete({
            promotion_code: data.promotion_code
        })
        if(promotionCheck){
            return{
                status: 200,
                message: "Promotion Deleted Successfully",
                data: {promotionCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = { AddPromotion, UpdatePromotion, GetPromotion, GetAllPromotion, DeletePromotion}