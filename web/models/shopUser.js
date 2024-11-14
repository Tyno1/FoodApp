const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const shopUserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  userType: {
    type: Schema.Types.ObjectId,
    ref: "UserType",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ShopUser = model("ShopUser", shopUserSchema);

module.exports = ShopUser;
