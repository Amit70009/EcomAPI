var CategorySchema = require("./categoryModel").CategoryModel
var { CategoryModel } = require("./categoryModel.js")
var CommonFunc = require("../../Common Function/commonfunction.js");

async function AddCategory(data, categoryImages){
    try {
        var checkCategory = await CategoryModel.findOne({
            $or: [
                { category_id: data.category_id },
                { category_name: data.category_name }
            ]
        })
        if(checkCategory){
            return{
                status: 200,
                message: "Category already exists",
                data: {checkCategory}
            }
        }

        const highestPriorityCategory = await CategoryModel.findOne({}, { category_priority: 1 }).sort({ category_priority: -1 });
        const newPriority = highestPriorityCategory ? highestPriorityCategory.category_priority + 1 : 0;
        console.log("Highest",highestPriorityCategory);
        console.log("New", newPriority);

        var categoryCreate = {
            category_id: data.category_id,
            category_image: categoryImages,
    category_name: data.category_name,
    category_subcategory: data.category_subcategory,
    isCategoryEnable: data.isCategoryEnable,
    category_priority: newPriority,
        }

        await CategoryModel.create(categoryCreate);
       
            return {
            status: 200,
            message: "Category Created Successfully",
            data: {categoryCreate}
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
                category_image: categoryImages,
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