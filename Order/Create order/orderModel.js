const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
    order_id: { type: String, required: true },
    order_status: {type: String},
    order_total_price: {type: Number},
    order_user_id: {type: String},
    order_returned_on: {type: Date},
    createdOn: {type: Date, default: new Date()},
});

var OrderModel = mongoose.model("Order Schema", OrderSchema);

module.exports = {
    OrderModel
}
