const { MinKey, MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
    order_number: { type: String, required: true },
    order_id: {type: String, required: true},
    order_ipAddress: {type: Object},
    order_status: {type: String},
    order_subtotal: {type: Number},
    order_discount: {type: Number},
    order_total_price: {type: Number},
    order_billing_info:{
        payment_method: {type: String},
        payment_type: {type: String},
        billing_contact: {
            email: {type: String, required: true},
            first_name: {type: String},
            last_name: {type: String},
            phone_number: {type: Number, MinKey: 10, MaxKey: 11, required: true}
        },
        billing_address: {
            address1: {type: String, required: true},
            address2: {type: String},
            city: {type: String, required: true},
            state: {type: String, required: true},
            postal_code: {type: String, required: true},
            country_code: {type: String, MinKey: 2, MaxKey: 3},
            address_type: {type: String}    
        },
        isBillingAndShippingSame: {type: Boolean},
        card_details: {
            nameOnCard: {type: String},
            isCardInfoSaved: {type: Boolean},
            cardType: {type: String},
            cardNumber: {type: String},
            expireMonth: {type: Number},
            expireYear: {type: Number}
        },
        billining_created_on: {type: Date, default: new Date()}
    },
    order_shipping_info: {
        shipping_method: {
            shipping_name: {type: String, required: true},
            shipping_price: {type: Number},
            shipping_discount: {type: Number},
            shipping_total: {type: Number}
        },
        shipping_contact: {
            email: {type: String, required: true},
            first_name: {type: String},
            last_name: {type: String},
            phone_number: {type: Number, MinKey: 10, MaxKey: 11, required: true}
        },
        shipping_address: {
            address1: {type: String, required: true},
            address2: {type: String},
            city: {type: String, required: true},
            state: {type: String, required: true},
            postal_code: {type: String, required: true},
            country_code: {type: String, MinKey: 2, MaxKey: 3},
            address_type: {type: String}    
        },
        shipping_created_on: {type: Date, default: new Date()}
    },
    order_user_id: {type: String, required: true},
    order_item: [{type: Object, required: true}],
    order_notes: {type: String},
    order_return_id: {type: String},
    order_returned_on: {type: Date},
    createdOn: {type: Date, default: new Date()},
});

var OrderModel = mongoose.model("Order Schema", OrderSchema);

module.exports = {
    OrderModel
}
