var CategorySchema = require("./subCategoryModel.js").SubCategoryModel
var { SubCategoryModel } = require("./subCategoryModel.js")
var CommonFunc = require("../../Common Function/commonfunction.js");

async function AddSubCategory(data, SubCategoryImage){
    try {
        var checkSubCategory = await SubCategoryModel.findOne({
            $or: [
                { sub_category_id: data.sub_category_id },
                { sub_category_name: data.sub_category_name }
            ]
        })
        if(checkSubCategory){
            return{
                status: 200,
                message: "Sub Category already exists",
                data: {checkSubCategory}
            }
        }

        const highestPriorityCategory = await SubCategoryModel.findOne({}, { sub_category_priority: 1 }).sort({ sub_category_priority: -1 });
        const newPriority = highestPriorityCategory ? highestPriorityCategory.sub_category_priority + 1 : 0;

        var subCategoryCreate = {
            sub_category_id: data.sub_category_id,
            sub_category_image: SubCategoryImage,
            parent_category_id: data.parent_category_id,
            parent_category_name: data.parent_category_name,
            sub_category_name: data.sub_category_name,
            isSubCategoryEnable: data.isSubCategoryEnable,
            sub_category_priority: newPriority,
        }

        await SubCategoryModel.create(subCategoryCreate);
       
            return {
            status: 200,
            message: "Sub Category Created Successfully",
            data: {subCategoryCreate}
        }
       
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetSubCategory(data){
    try {
        var checkSubCategory = await SubCategoryModel.findOne({
            sub_category_id: data
        })
        if(checkSubCategory){
            return{
                status: 200,
                message: "Sub Category Fetched Successfully",
                data: {checkSubCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Sub Category Found",
                data: {checkSubCategory}
            }
        }
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function GetAllSubCategory(data, queryParams){
    try {
        const filter = { ...queryParams };
        var checkSubCategory = await SubCategoryModel.find(filter)
        if(checkSubCategory)
        {
            return{
                status: 200,
                message: "All Sub Category Fetched Successfully",
                data: {checkSubCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Category Found",
                data: {checkSubCategory}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function RemoveSubCategory(data){
    try {
        var checkSubCategory = await SubCategoryModel.findOneAndRemove({
            sub_category_id: data.sub_category_id
        })
        if(checkSubCategory){
            return{
                status: 200,
                message: "Sub Category Deleted Successfully",
                data: {checkSubCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Sub Category Found",
                data: {checkSubCategory}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function UpdateSubCategory(SubCategoryID, data){
    try {
        var checkSubCategory = await SubCategoryModel.findOneAndUpdate({
            sub_category_id: SubCategoryID
        }, {
            $set:{
                sub_category_name: data.sub_category_name,
                sub_category_image: categoryImages,
                parent_category_id: data.parent_category_id,
                parent_category_name: data.parent_category_name,
                sub_category_priority: data.sub_category_priority,
                isCategoryEnable: data.isCategoryEnable
            }
        },
        {new: true})
        if(checkSubCategory){
            return {
                status: 200,
                message: "Sub Category Updated Successfully",
                data: {checkSubCategory}
            }
        }
        else{
            return{
                status: 200,
                message: "No Sub Category Found",
                data: {checkSubCategory}
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { AddSubCategory, GetSubCategory, GetAllSubCategory, RemoveSubCategory, UpdateSubCategory}