const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  shopId: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  type: {
    type: String,
    enum: ["Product", "Service"],
    required: true,
  },
});

// Create models
const Category = model("Category", categorySchema);

module.exports = Category;
