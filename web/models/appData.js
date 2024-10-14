const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// const { encryptionPlugin } = require("../utils/encryption");

// Define Font schema
const fontSchema = new Schema({
  family: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const bannerSchema = new Schema({
  image: {
    type: String,
  },
});

// Define AppData schema
const appDataSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  splashScreenColor: {
    type: String,
    required: true,
  },
  primaryColor: {
    type: String,
    required: true,
  },
  secondaryColor: {
    type: String,
    required: true,
  },
  font: {
    type: fontSchema,
    required: true,
  },
  productEnabled: {
    type: Boolean,
    default: true,
  },
  serviceEnabled: {
    type: Boolean,
    default: true,
  },
  banners: {
    type: [bannerSchema],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  currentOwner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// appDataSchema.plugin(encryptionPlugin, {
//   fields: ["title", "splashScreenColor", "primaryColor", "secondaryColor"],
// });

// Create models
const AppData = model("AppData", appDataSchema);

module.exports = AppData;
