const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var SubCategorySchema = new mongoose.Schema({
    sub_category_id: { type: String, required: true },
    sub_category_name: {type: String},
    parent_category_id: {type: String},
    parent_category_name: {type: String},
    sub_category_image: {type: String},
    sub_category_priority: { type: Number, default: 0 },
    isSubCategoryEnable: {type: Boolean},
    createdOn: {type: Date, default: new Date()},
});

var SubCategoryModel = mongoose.model("Sub Category Schema", SubCategorySchema);
module.exports = {
    SubCategoryModel
}
