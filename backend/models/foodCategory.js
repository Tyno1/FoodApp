const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const foodCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: { type: String },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: "FoodCategory",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("FoodCategory", foodCategorySchema);
