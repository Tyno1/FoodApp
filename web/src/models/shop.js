const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ShopDetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  storeType: {
    type: String,
    required: true,
  },
  storeDescription: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const shopSchema = new Schema({
  shopDetails: {
    type: ShopDetailsSchema,
    required: true,
  },
  shopUI: {
    type: Schema.Types.ObjectId,
    ref: "AppData",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Shop = model("Shop", shopSchema);

module.exports = Shop;
