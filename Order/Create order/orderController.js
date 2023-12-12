const { ObjectID, UUID } = require("bson");
var OrderSchema = require("../Create order/orderModel").OrderModel;
var CommonFunc = require("../../Common Function/commonfunction.js");

async function createOrder(data){
    try {
        var orderCheck = await OrderSchema.findOne({
            order_id: data.order_id
        })
        if(orderCheck){
            return{
                status: 200,
                message: "Order already exists with the same order id",
                data: {orderCheck}
            }
        }
         
        var orderCreate = {
            order_number: data.order_number,
            order_id: new UUID(),
            order_ipAddress: data.order_ipAddress,
            order_status: data.order_status,
            order_subtotal: data.order_subtotal,
            order_total_price: data.order_total_price,
            order_discount: data.order_discount,
            order_item: data.order_item,
            order_billing_info: data.order_billing_info,
            order_shipping_info: data.order_shipping_info,
            order_user_id: data.order_user_id,
            order_notes: data.order_notes,
            order_return_id: data.order_return_id,
            order_returned_on: data.order_returned_on,
        }

        await OrderSchema.create(orderCreate);
            return{
                status: 200,
                message: "Order Created Successfully",
                data: {orderCreate}
            }
     
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function UpdateOrder(OrderID, data){
    try {
        var orderCheck = await OrderSchema.findOneAndUpdate({
            order_id: OrderID
        }, {
            $set:{
                order_status: data.order_status,
                order_subtotal: data.order_subtotal,
                order_total_price: data.order_total_price,
                order_discount: data.order_discount,
                order_item: data.order_item,
                order_billing_info: data.order_billing_info,
                order_shipping_info: data.order_shipping_info,
                order_notes: data.order_notes,
            }
        },
        { new: true }
        )
        if(orderCheck){
            return{
                status: "200",
                Message: "Order Updated successfully",
                data: {orderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function DeleteOrder(data){
    try {
        var orderCheck = await OrderSchema.findOneAndDelete({
            order_id: data.order_id
        })
        if(orderCheck){
            return{
                status: 200,
                message: "Order Deleted Successfully",
                data: {orderCheck}
            }
        }
        else{
            return{
                status: 200,
                message: "No Order Found",
                data: {orderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetOrder(data){
    try {
        var orderCheck = await OrderSchema.findOne({
            order_id: data
        })
        if(orderCheck){
            return{
                status: 200,
                message: "Order Fetched Successfully",
                data: {orderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function GetAllOrder(data){
    try {
        var orderCheck = await OrderSchema.find()
        if(orderCheck){
            return{
                status: 200,
                message: "All Orders Fetched Successfully",
                data: {orderCheck}
            }
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = { createOrder, UpdateOrder, DeleteOrder, GetOrder, GetAllOrder }