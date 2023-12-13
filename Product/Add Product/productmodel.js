const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    product_code: { type: Number, required: true },
    product_name: { type: String, require: true },
    product_category: {type: String},
    product_price: { type: String, require: true },
    product_sale_price: {type: String},
    product_size: [{type: Number}],
    product_color: [{type: String}],
    product_dimension: {
        product_height: {type: String},
        product_width: {type: String},
        product_length: {type: String},
        product_weight: {type: String}
    },
    product_inventory: {type:Number, require: true},
    product_short_description: {type: String},
    product_long_description: {type: String},
    isProductAvailable: { type: Boolean },
    productImage: [{type: String}],
    createdOn: {type: Date, default: new Date()},
    isProductTaxable: {type: Boolean}
});

var productModel = mongoose.model("Product Schema", productSchema);

module.exports = {
    productModel
}
