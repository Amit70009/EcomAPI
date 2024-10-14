var express = require('express');
var Constant = require("./Common Function/commonfunction.js");
var app = express();

const bodyParser = require('body-parser');
var cors = require('cors');
var dbconn = require("./Database/database.js");
app.use(cors({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type"
}))
const axios = require('axios');
var UserLogin = require("./Login Function/Routes.js");
var RegisterUser = require("./Register Function/Routes.js")
var GetProfile = require("./Get Profile/getprofile.js");
var UpdateProfile = require("./Update Profile/updateUser.js");
var AddProduct = require("./Product/Add Product/addProductRoute.js");
var DeleteProduct = require("./Product/Delete Product/deleteRoutes.js");
var UpdateProduct = require("./Product/Edit Product/editProductRoute.js");
var GetProduct = require("./Product/Get Product/getProduct.js");
var GetAllProduct = require("./Product/Get All Products/getAllProduct.js")
var CreateDiscount = require("./Discount/Create Discount/createDiscount.js")
var DeleteDiscount = require("./Discount/DeleteDiscount/deletediscount.js");
var GetDiscount = require("./Discount/Get Discount/getDiscount.js");
var GetAllDiscount = require("./Discount/Get All Discount/getAllDiscount.js");
var UpdateDiscount = require("./Discount/Edit Discount/editdiscount.js")
var CreateOrder = require("./Order/Create order/createOrder.js");
var UpdateOrder = require("./Order/Update Order/updateOrder.js");
var DeleteOrder = require("./Order/Delete Order/deleteOrder.js");
var GetOrder = require("./Order/Get Order/getOrder.js")
var GetAllOrder = require("./Order/Get All Orders/getAllOrders.js")
var CreateCategory = require("./Category/Add Category/addCategory.js");
var UpdateCategory = require("./Category/Update Category/updateCategory.js");
var GetCategory = require("./Category/Get Category/getCategory.js");
var GetAllCategory = require("./Category/GetAllCategory/getAllCategory.js");
var DeleteCategory = require("./Category/Remove Category/removeCategory.js")
var CreateReturnOrder = require("./Return Order/Create Return Order/createReturnOrder.js");
var UpdateReturnOrder = require("./Return Order/Update Return Order/updateReturnOrder.js")
var GetReturnOrder = require("./Return Order/Get Return Order/getReturnOrder.js")
var GetAllReturnOrder = require("./Return Order/Get All Return Orders/getAllReturnOrder.js");
var DeleteReturnOrder = require("./Return Order/Delete Return Order/deleteReturnOrder.js");
var AddPromotion = require("./Promotion/Add Promotion/addPromotion.js");
var DeletePromotion = require("./Promotion/Delete Promotion/deletePromotion.js");
var UpdatePromotion = require("./Promotion/Update Promotion/editPromotion.js");
var GetPromotion = require("./Promotion/Get Promotion/getPromotion.js");
var GetAllPromotion = require("./Promotion/Get All Promotion/getAllPromotion.js");
var FetchAllProfile = require("./Get Profile/getAllProfile.js");
var AddShipping = require("./Shipping/Add Shipping/AddShipping.js");
var DeleteShipping = require("./Shipping/Remove Shipping/RemoveShipping.js");
var GetShipping = require("./Shipping/Get Shipping/GetShipping.js");
var GetAllShipping = require("./Shipping/Get All Shipping/GetAllShipping.js");
var UpdateShipping = require("./Shipping/Update Shipping/UpdateShipping.js");
var UpdateProfilePic = require("./Update Profile/UpdateProfilePic.js");
var AddToCart = require("./Cart/AddCart/addToCart.js")
var UpdateCart = require("./Cart/UpdateCart/UpdateCart.js")
var DeleteAllCart = require("./Cart/Delete cart/DeleteAll.js")
var DeleteCart = require("./Cart/Delete cart/deleteCart.js")
var fetchAllCart = require("./Cart/Get Cart/fetchCart.js");
var PhonePe = require("./Payment/phonePay.js")
var Payment = require("./Payment/payment.js")
const fetchCart = require('./Cart/Get Cart/fetchOneCart.js');
var fetchCartByProductCode = require("./Cart/Get Cart/fetchCartByProductCode.js");
var CreateSubCategory = require("./Sub Category/Add Sub-Category/addSubCategory.js")
var FetchSubCategory = require("./Sub Category/Get Sub-Category/getSubCategory.js")
var FetchAllSubCategory = require("./Sub Category/GetAllSubCategory/getAllSubCategory.js")
var UpdateSubCategory = require("./Sub Category/Update Sub-Category/updateSubCategory.js")
var RemoveSubCategory = require("./Sub Category/Remove Sub-Category/removeSubCategory.js")
// var Payment = require("./Payment/payment.js")
var NewFile = require("./Payment/Newfile.js")
require('dotenv').config();


// app.use("/public", express.static(path.join(__dirname, "public")));
dbconn.databaseConn();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.json());
app.use('/uploads', express.static('uploads'))

app.get("/", (request, response) => {
    response.sendFile(__dirname); 
});

const validApiKeys = [process.env.API_KEY];

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(401).json({ 
        status: 401,
        error: 'Unauthorized',
    message: "You are not authorized to perform this action. Please check with your admin" });
  }

  next(); // Continue to the next middleware or route
};


  

app.use(authenticateApiKey);
app.use("/api/users", UserLogin);
app.use("/api/users", RegisterUser);
app.use("/api/users", GetProfile);
app.use("/api/users", UpdateProfile);
app.use("/api/users", AddProduct);
app.use("/api/users", DeleteProduct)
app.use("/api/users", UpdateProduct)
app.use("/api/users", GetProduct)
app.use("/api/users", GetAllProduct)
app.use("/api/users", CreateDiscount)
app.use("/api/users", DeleteDiscount)
app.use("/api/users", GetDiscount)
app.use("/api/users", GetAllDiscount)
app.use("/api/users", UpdateDiscount)
app.use("/api/users", CreateOrder)
app.use("/api/users", UpdateOrder)
app.use("/api/users", GetOrder)
app.use("/api/users", GetAllOrder)
app.use("/api/users", DeleteOrder)
app.use("/api/users", CreateCategory)
app.use("/api/users", UpdateCategory)
app.use("/api/users", GetAllCategory)
app.use("/api/users", GetCategory)
app.use("/api/users", DeleteCategory)
app.use("/api/users", CreateReturnOrder)
app.use("/api/users", UpdateReturnOrder)
app.use("/api/users", GetReturnOrder)
app.use("/api/users", GetAllReturnOrder)
app.use("/api/users", DeleteReturnOrder)
app.use("/api/users", AddPromotion)
app.use("/api/users", UpdatePromotion)
app.use("/api/users", GetPromotion)
app.use("/api/users", GetAllPromotion)
app.use("/api/users", DeletePromotion)
app.use("/api/users", FetchAllProfile)
app.use("/api/users", AddShipping)
app.use("/api/users", GetShipping)
app.use("/api/users", GetAllShipping)
app.use("/api/users", UpdateShipping)
app.use("/api/users", DeleteShipping)
app.use("/api/users", UpdateProfilePic)
app.use("/api/users", AddToCart)
app.use("/api/users", UpdateCart)
app.use("/api/users", DeleteAllCart)
app.use("/api/users", DeleteCart)
app.use("/api/users", fetchAllCart)
app.use("/api/users", fetchCart)
app.use("/api/users", fetchCartByProductCode)
app.use("/api/users", Payment);
app.use("/api/users", CreateSubCategory);
app.use("/api/users", FetchSubCategory);
app.use("/api/users", FetchAllSubCategory);
app.use("/api/users", RemoveSubCategory);
app.use("/api/users", UpdateSubCategory);
// app.use("/api/users", PhonePe)
app.use("/api/users", NewFile)

app.listen(Constant.portNo, async (error, conn) => {
    if(error){
        console.log("error", error);
        throw error
    }
    console.log(`Server has been started on port no : ${Constant.portNo}`);
});