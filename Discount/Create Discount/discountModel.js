const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var discountSchema = new mongoose.Schema({
    discount_code: { type: String, required: true },
    discount_description: {type: String},
    isDiscountEnabled: { type: Boolean },
    discount_type: {type: String, defautl: "Amount"},
    discount_type_amount: {type: Number},
    discount_start_date: {type: Date},
    discount_end_date: {type: Date},
    createdOn: {type: Date, default: new Date()},
});

var DiscountModel = mongoose.model("Discount Schema", discountSchema);

module.exports = {
    DiscountModel
}
