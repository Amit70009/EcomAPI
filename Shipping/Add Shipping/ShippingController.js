const { ObjectID } = require("bson");
var ShippingOrderSchema = require("../Add Shipping/ShippingModel").ShippingOrderModal;
var CommonFunc = require("../../Common Function/commonfunction.js");

async function createShipping(data){
    try {
        var shippingCheck = await ShippingOrderSchema.findOne({
            shipping_id: data.shipping_id
        })
        if(shippingCheck){
            return{
                status: 200,
                message: "Shipping already exists",
                data: {shippingCheck}
            }
        }
         
        var shippingOrderSchema = {
            shipping_id: data.shipping_id,
            shipping_name: data.shipping_name,
            shipping_price: data.shipping_price,
            shipping_minimum_value: data.shipping_minimum_value,
            shipping_maximum_value: data.shipping_maximum_value,
            shipping_unit: data.shipping_unit,
            isShippingEnable: data.isShippingEnable
        }

        await ShippingOrderSchema.create(shippingOrderSchema);
            return{
                status: 200,
                message: "Shipping Created Successfully",
                data: {shippingOrderSchema}
            }
     
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function UpdateShipping(shipping_id, data){
    try {
        var ShippingCheck = await ShippingOrderSchema.findOneAndUpdate({
            shipping_id: shipping_id
        }, {
            $set:{
                shipping_name: data.shipping_name,
                shipping_price: data.shipping_price,
                isShippingEnable: data.isShippingEnable,
                shipping_minimum_value: data.shipping_minimum_value,
            shipping_maximum_value: data.shipping_maximum_value,
            shipping_unit: data.shipping_unit,
            }
        },
        { new: true }
        )
        if(ShippingCheck){
            return{
                status: "200",
                Message: "Shipping Updated successfully",
                data: {ShippingCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function DeleteShipping(data){
    try {
        var ShippingCheck = await ShippingOrderSchema.findOneAndDelete({
            shipping_id: data.shipping_id
        })
        if(ShippingCheck){
            return{
                status: 200,
                message: "Shipping Deleted Successfully",
                data: {ShippingCheck}
            }
        }
        else{
            return{
                status: 200,
                message: "No Shipping Found",
                data: {ShippingCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetShipping(data){
    try {
        var ShippingCheck = await ShippingOrderSchema.findOne({
            shipping_id: data
        })
        if(ShippingCheck){
            return{
                status: 200,
                message: "Shipping Fetched Successfully",
                data: {ShippingCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function GetAllShipping(data, queryParams){
    try {
        const filter = { ...queryParams };
        var ShippingCheck = await ShippingOrderSchema.find(filter)
        if(ShippingCheck){
            return{
                status: 200,
                message: "All Return Orders Fetched Successfully",
                data: {ShippingCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = { createShipping, UpdateShipping, DeleteShipping, GetShipping, GetAllShipping }