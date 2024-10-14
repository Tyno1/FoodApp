const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const imageSchema = new Schema({
  image: {
    type: String,
  },
});

// Define Product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  imageUrls: {
    type: [imageSchema],
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  metaData: {
    type: Object,
  },
});

// Create models
const Product = model("Product", productSchema);

module.exports = Product;
