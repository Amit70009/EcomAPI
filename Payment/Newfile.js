
const express = require("express")
const userRouter = express.Router()
const crypto = require("crypto");
const axios = require("axios");

function generateTransactionID() {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000000);
    const merchantPrefix = "T";
    const transactionID = `${merchantPrefix}${timestamp}${randomNumber}`;
    return transactionID;
}

userRouter.post("/payment", async (req, res) => {
    try {
        const {name, number, amount} = req.body
        const data = {
            merchantId: "PGTESTPAYUAT",
            merchantTransactionId: generateTransactionID(),
            merchantUserId: "123445",
            name: "Amit",
            amount: 100 * 100,
            redirectUrl: 'http://localhost:7383/success',
            redirectMode: "POST",
            mobileNumber: 7000972490,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + "###" + keyIndex;


        const URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
        const options = {
            method: "POST",
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-type': 'application/json',
                'X_VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };
        axios.request(options)
        .then(function(response){
            return console.log(response.data  );
            return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url)
        })
        .catch(function(error){
            console.log(error);
        })
    } catch (error) {
        
    }
})

module.exports = userRouter
