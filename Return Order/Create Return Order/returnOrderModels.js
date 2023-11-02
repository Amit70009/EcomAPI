const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var ReturnOrderSchema = new mongoose.Schema({
    return_order_id: { type: String, required: true },
    return_order_status: {type: String},
    return_order_total_price: {type: Number},
    return_order_user_id: {type: String},
    original_order_associated: {type: String},
    return_order_returned_on: {type: Date},
    return_createdOn: {type: Date, default: new Date()},
});

var ReturnOrderModel = mongoose.model("Return Order Schema", ReturnOrderSchema);

module.exports = {
    ReturnOrderModel
}
