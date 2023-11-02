var express = require('express');
var Constant = require("./Common Function/commonfunction");
var app = express();
var cors = require('cors');
var dbconn = require("./Database/database");
app.use(cors({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type"
}))
const axios = require('axios');
var UserLogin = require("./Login Function/Routes");
var RegisterUser = require("./Register Function/Routes")
var GetProfile = require("./Get Profile/getprofile");
var UpdateProfile = require("./Update Profile/updateUser");
var AddProduct = require("./Product/Add Product/addProductRoute");
var DeleteProduct = require("./Product/Delete Product/deleteRoutes");
var UpdateProduct = require("./Product/Edit Product/editProductRoute");
var GetProduct = require("./Product/Get Product/getProduct");
var GetAllProduct = require("./Product/Get All Products/getAllProduct")
var CreateDiscount = require("./Discount/Create Discount/createDiscount")
var DeleteDiscount = require("./Discount/DeleteDiscount/deletediscount");
var GetDiscount = require("./Discount/Get Discount/getDiscount");
var GetAllDiscount = require("./Discount/Get All Discount/getAllDiscount");
var UpdateDiscount = require("./Discount/Edit Discount/editdiscount")
var CreateOrder = require("./Order/Create order/createOrder");
var UpdateOrder = require("./Order/Update Order/updateOrder");
var DeleteOrder = require("./Order/Delete Order/deleteOrder");
var GetOrder = require("./Order/Get Order/getOrder")
var GetAllOrder = require("./Order/Get All Orders/getAllOrders")
var CreateCategory = require("./Category/Add Category/addCategory");
var UpdateCategory = require("./Category/Update Category/updateCategory");
var GetCategory = require("./Category/Get Category/getCategory");
var GetAllCategory = require("./Category/GetAllCategory/getAllCategory");
var DeleteCategory = require("./Category/Remove Category/removeCategory")
var CreateReturnOrder = require("./Return Order/Create Return Order/createReturnOrder");
var UpdateReturnOrder = require("./Return Order/Update Return Order/updateReturnOrder")
var GetReturnOrder = require("./Return Order/Get Return Order/getReturnOrder")
var GetAllReturnOrder = require("./Return Order/Get All Return Orders/getAllReturnOrder");
var DeleteReturnOrder = require("./Return Order/Delete Return Order/deleteReturnOrder");
var AddPromotion = require("./Promotion/Add Promotion/addPromotion");
var DeletePromotion = require("./Promotion/Delete Promotion/deletePromotion");
var UpdatePromotion = require("./Promotion/Update Promotion/editPromotion");
var GetPromotion = require("./Promotion/Get Promotion/getPromotion");
var GetAllPromotion = require("./Promotion/Get All Promotion/getAllPromotion");

app.use(express.json());
// app.use("/public", express.static(path.join(__dirname, "public")));
dbconn.databaseConn();

app.get("/", (request, response) => {
    response.sendFile(__dirname); 
});

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

app.listen(Constant.portNo, async (error, conn) => {
    if(error){
        console.log("error", error);
        throw error
    }
    console.log(`Server has been started on port no : ${Constant.portNo}`);
});