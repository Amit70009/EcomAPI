const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var cartSchema = new mongoose.Schema({
   cart_user_id: {type: String, Required: true},
   cart_product_code: {type: Number},
   cart_product_image: [{type: String}],
   cart_product_name: {type: String},
   cart_product_size:  [{type: String}],
   cart_product_color:  [{type: String}],
   cart_product_quantity: {type: String},
   cart_product_price: {type: String},
   cart_product_sale_price: {type: String},
   cart_product_description: {type: String},
   cart_total_price: {type: String}
});

var CartModel = mongoose.model("Cart Schema", cartSchema);

module.exports = {
    CartModel
}
