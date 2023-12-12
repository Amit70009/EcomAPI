const { ObjectID } = require("bson");
var ReturnOrderSchema = require("../Create Return Order/returnOrderModels").ReturnOrderModel;
var CommonFunc = require("../../Common Function/commonfunction.js");

async function createReturnOrder(data){
    try {
        var returnOrderCheck = await ReturnOrderSchema.findOne({
            return_order_id: data.return_order_id
        })
        if(returnOrderCheck){
            return{
                status: 200,
                message: "Return Order already exists",
                data: {orderCheck}
            }
        }
         
        var returnOrderCreate = {
            return_order_id: data.return_order_id,
            return_order_status: data.return_order_status,
            return_order_total_price: data.return_order_total_price,
            return_order_user_id: data.return_order_user_id,
            original_order_associated: data.original_order_associated
        }

        await ReturnOrderSchema.create(returnOrderCreate);
            return{
                status: 200,
                message: "Return Order Created Successfully",
                data: {returnOrderCreate}
            }
     
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function UpdateReturnOrder(Return_OrderID, data){
    try {
        var ReturnOrderCheck = await ReturnOrderSchema.findOneAndUpdate({
            return_order_id: Return_OrderID
        }, {
            $set:{
                return_order_status: data.return_order_status,
                return_order_total_price: data.return_order_total_price
            }
        },
        { new: true }
        )
        if(ReturnOrderCheck){
            return{
                status: "200",
                Message: "Return Order Updated successfully",
                data: {ReturnOrderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function DeleteReturnOrder(data){
    try {
        var ReturnOrderCheck = await ReturnOrderSchema.findOneAndDelete({
            return_order_id: data.return_order_id
        })
        if(ReturnOrderCheck){
            return{
                status: 200,
                message: "Return Order Deleted Successfully",
                data: {ReturnOrderCheck}
            }
        }
        else{
            return{
                status: 200,
                message: "No Order Found",
                data: {ReturnOrderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetReturnOrder(data){
    try {
        var ReturnOrderCheck = await ReturnOrderSchema.findOne({
            return_order_id: data
        })
        if(ReturnOrderCheck){
            return{
                status: 200,
                message: "Return Order Fetched Successfully",
                data: {ReturnOrderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function GetAllReturnOrder(data){
    try {
        var ReturnOrderCheck = await ReturnOrderSchema.find()
        if(ReturnOrderCheck){
            return{
                status: 200,
                message: "All Return Orders Fetched Successfully",
                data: {ReturnOrderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = { createReturnOrder, UpdateReturnOrder, DeleteReturnOrder, GetReturnOrder, GetAllReturnOrder }