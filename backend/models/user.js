const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: String,
  preferredFoodCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: Date,
  isBlind: {
    type: Boolean,
    default: false,
  },
  privacySettings: Object,
});

module.exports = model("User", userSchema);
