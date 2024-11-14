const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const imageSchema = new Schema({
  image: {
    type: String,
  },
});

const serviceSchema = new Schema({
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
  duration: {
    type: Number,
    required: true,
  },
  imageUrls: {
    type: [imageSchema],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
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

const Service = model("Service", serviceSchema);

module.exports = Service;
