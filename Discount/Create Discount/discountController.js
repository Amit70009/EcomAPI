var discountSchema = require("./discountModel").DiscountModel
var CommonFunc = require("../../Common Function/commonfunction");

async function CreateDiscount(data){
try {
    var checkDiscount = await discountSchema.find({
        discount_code: data.discount_code
    })
    if(checkDiscount.length){
        return{
            status: 200,
            message: "Discount Code Already Exist",
            data: {checkDiscount}
        }
    }

    var addDiscount = {
        discount_code: data.discount_code,
        discount_description: data.discount_description,
        isDiscountEnabled: data.isDiscountEnabled,
        discount_type: data.discount_type,
        discount_type_amount: data.discount_type_amount,
        discount_start_date: data.discount_start_date,
        discount_end_date: data.discount_end_date,
        discount_applied_on: data.discount_applied_on
    }

    await discountSchema.create(addDiscount);
          
          return {
            status: 200,
            message: "Discount Added Successfully",
            data: {addDiscount}
          }

} catch (error) {
    console.log(error);
    throw error;
}
}

async function UpdateDiscount(discountID, data){
try {
    var matchDiscount = await discountSchema.findOneAndUpdate({
        discount_code: discountID
    }, {
        $set:{
            discount_description: data.discount_description,
            isDiscountEnabled: data.isDiscountEnabled,
            discount_type: data.discount_type,
            discount_type_amount: data.discount_type_amount,
            discount_start_date: data.discount_start_date,
            discount_end_date: data.discount_end_date,
            discount_applied_on: data.discount_applied_on
        }
    })
    if(matchDiscount){
        return{
            status: "200",
            Message: "Discount Updated successfully",
            data: {matchDiscount}
        }
    }
    
} catch (error) {
    console.log(error);
    throw error;
}
}

async function DeleteDiscount(data){
try {
    var checkDiscount = await discountSchema.find({
        discount_code: data.discount_code
    })
    if(!checkDiscount.length){
        return{
            status: 200,
            message: "No Discount found with this Discount Code",
            data: {}
    }
}
else{
    var deleteDiscount = await discountSchema.deleteOne({
        discount_code: data.discount_code
    })
    return{
        status: 200,
        message: "Discount has been Deleted Successfully",
        data: {checkDiscount}
  
}
}
} catch (error) {
    console.log(error);
    throw error;
}
}

async function GetDiscount(data){
    try {
        var matchDiscount = await discountSchema.findOne({
            discount_code: data });
            if(matchDiscount){
                return{
                    status: 200,
                    message: "Discount Fetched Successfully",
                    data: {matchDiscount}
                }
            }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetAllDiscount(data){
    try {
        var matchDiscount = await discountSchema.find();
        if(matchDiscount){
            return{
                status: 200,
                message: "All Discounts Fetched Successfully",
                data: {matchDiscount}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { CreateDiscount, UpdateDiscount, DeleteDiscount, GetDiscount, GetAllDiscount }