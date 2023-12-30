var express = require("express");
var userRouter = express.Router();
const stripe = require("stripe")("sk_test_51OR5xfSENOeQzubTFcxjHrpn7suM7ZzjFIrRT9Sk1SxSsecIVOFhIzL2UiDu2IRCP9KjueTHMWI8rJVTKEbFvu0Y00DC0p3h5I")

userRouter.post("/create-checkout-session", async (req, res) => {
    const products = req.body.cart;
    const shipping = req.body.shipping;
    const discounts = req.body.discount; 
    const orderTotal = req.body.totalPrice;

    const lineItems = [{
        price_data: {
            currency: "INR",
            product_data: {
                name: "Total Price",
            },
            unit_amount: orderTotal * 100
        
        },
        quantity: 1,
    }
    ]

    // const shippingItems = shipping.map((ship) => ({
    //     shipping_rate_data:{
    //         type: 'fixed_amount',
    //         fixed_amount:{
    //             amount: ship.shipping_price * 100,
    //             currency: 'INR',
    //         },
    //         display_name: ship.shipping_name,
    //         delivery_estimate: {
    //             minimum: {
    //                 unit: ship.shipping_unit,
    //                 value: ship.shipping_minimum_value
    //             },
    //             maximum: {
    //                 unit: ship.shipping_unit,
    //                 value: ship.shipping_maximum_value
    //             }
    //         }
    //     }
    // }))


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"

    });

    res.json({id: session.id})
})

module.exports = userRouter
