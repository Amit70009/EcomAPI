var CategorySchema = require("./categoryModel").CategoryModel
var CommonFunc = require("../../Common Function/commonfunction.js");

async function AddCategory(data){
    try {
        var checkCategory = await CategorySchema.findOne({
            category_id: data.category_id
        })
        if(checkCategory){
            return{
                status: 200,
                message: "Category already exists",
                data: {checkCategory}
            }
        }

        var categoryCreate = {
            category_id: data.category_id,
    category_name: data.category_name,
    category_subcategory: data.category_subcategory,
    isCategoryEnable: data.isCategoryEnable
        }

        await CategorySchema.create(categoryCreate);
        {
            return {
            status: 200,
            message: "Category Created Successfully",
            data: {categoryCreate}
        }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetCategory(data){
    try {
        var checkCategory = await CategorySchema.findOne({
            category_id: data
        })
        if(checkCategory){
            return{
                status: 200,
                message: "Category Fetched Successfully",
                data: {checkCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Category Found",
                data: {checkCategory}
            }
        }
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetAllCategory(data, queryParams){
    try {
        const filter = { ...queryParams };
        var checkCategory = await CategorySchema.find(filter)
        if(checkCategory)
        {
            return{
                status: 200,
                message: "All Category Fetched Successfully",
                data: {checkCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Category Found",
                data: {checkCategory}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function RemoveCategory(data){
    try {
        var checkCategory = await CategorySchema.findOneAndRemove({
            category_id: data.category_id
        })
        if(checkCategory){
            return{
                status: 200,
                message: "Category Deleted Successfully",
                data: {checkCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Category Found",
                data: {checkCategory}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function UpdateCategory(CategoryID, data){
    try {
        var checkCategory = await CategorySchema.findOneAndUpdate({
            category_id: CategoryID
        }, {
            $set:{
                category_name: data.category_name,
                category_subcategory: data.category_subcategory,
                isCategoryEnable: data.isCategoryEnable
            }
        },
        {new: true})
        if(checkCategory){
            return {
                status: 200,
                message: "Category Updated Successfully",
                data: {checkCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Category Found",
                data: {checkCategory}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { AddCategory, GetCategory, GetAllCategory, RemoveCategory, UpdateCategory}