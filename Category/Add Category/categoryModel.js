const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
    category_id: { type: String, required: true },
    category_name: {type: String},
    category_subcategory: [{type: String}],
    isCategoryEnable: {type: Boolean},
    createdOn: {type: Date, default: new Date()},
});

var CategoryModel = mongoose.model("Category Schema", CategorySchema);

module.exports = {
    CategoryModel
}
