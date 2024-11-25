const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const axios = require("axios");
const bodyParser = require("body-parser");



// require("dotenv").config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));



// let salt_key = process.env.SALT_KEY
// let merchant_id = process.env.MERCHANT_ID
let salt_key = '96434309-7796-489d-8924-ab56988a6076';
let merchant_id = 'PGTESTPAYUAT86';

app.get("/", (req, res) => {
    res.send("server is running");
})


app.post("/order", async (req, res) => {
    try {
        console.log(req.body)
        const merchantTransactionId = req.body.transactionId;
        const data = {
            merchantId: merchant_id,
            merchantTransactionId: merchantTransactionId,
            merchantUserId: req.body.MUID,
            name: req.body.name,
            amount: req.body.amount * 100,
            redirectUrl: `http://localhost:8000/status/?id=${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: req.body.mobile,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;
        // this URL is for live website 
        // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
        // this URL is for testing website 
        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios.request(options).then(function (response) {
                console.log(response.data)

                return res.json(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }

})


app.post("/status", async (req, res) => {

    // console.log(res.data)
    const merchantTransactionId = req.query.id
    const merchantId = merchant_id

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
        method: 'GET',
        url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,

        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': `${merchantId}`
        }
        
    };

    // CHECK PAYMENT TATUS
    axios.request(options).then(async (response) => {
            console.log(response)
            if (response.data.success === true) {
                const url = `http://localhost:5173/PaymentSuccess`
                return res.redirect(url)
            } else {
                const url = `http://localhost:5173/PaymentFailed`
                return res.redirect(url)
            }
        })
        .catch((error) => {
            console.error(error);
        });

})


app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
})