const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var ShippingOrderSchema = new mongoose.Schema({
    shipping_id: { type: String, required: true },
    shipping_name: {type: String},
    shipping_price: {type: Number},
    isShippingEnable: {type: Boolean}
});

var ShippingOrderModal = mongoose.model("Shipping Order Schema", ShippingOrderSchema);

module.exports = {
    ShippingOrderModal
}
