var express = require("express");
var userRouter = express.Router();
const stripe = require("stripe")("sk_test_51OR5xfSENOeQzubTFcxjHrpn7suM7ZzjFIrRT9Sk1SxSsecIVOFhIzL2UiDu2IRCP9KjueTHMWI8rJVTKEbFvu0Y00DC0p3h5I")

userRouter.post("/create-checkout-session", async (req, res) => {
    const products = req.body.cart;
    const shipping = req.body.shipping;
    console.log(shipping);

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "INR",
            product_data: {
                name: product.cart_product_name,
                images: product.cart_product_image
            },
            unit_amount: parseInt(product.cart_total_price) * 100,
        },
        quantity: parseInt(product.cart_product_quantity),
    }));

    const shippingItems = shipping.map((ship) => ({
        shipping_rate_data:{
            type: 'fixed_amount',
            fixed_amount:{
                amount: ship.shipping_price * 100,
                currency: 'INR',
            },
            display_name: ship.shipping_name,
            delivery_estimate: {
                minimum: {
                    unit: 'business_day',
                    value: 5
                },
                maximum: {
                    unit: 'business_day',
                    value: 7,
                }
            }
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ['IN']
        },
        shipping_options: shippingItems,
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"

    });

    res.json({id: session.id})
})

module.exports = userRouter