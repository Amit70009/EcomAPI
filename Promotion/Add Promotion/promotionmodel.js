const { MaxKey } = require("mongodb");
var mongoose = require("mongoose");

var promotionSchema = new mongoose.Schema({
    promotion_code: { type: String, required: true },
  promotion_name: {type: String},
  promotion_description: {type: String},
  isPromotionEnabled: {type: Boolean},
  createdOn: {type: Date, default: new Date()},
});

var promotionModel = mongoose.model("Promotion Schema", promotionSchema);

module.exports = {
    promotionModel
}
