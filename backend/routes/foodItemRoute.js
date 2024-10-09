const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const foodItemSchema = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "FoodCategory",
    required: true,
  },
  ingredients: [String],
  allergens: [String],
  pictures: [String],
});

module.exports = model("FoodItem", foodItemSchema);
