const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  services: [
    {
      serviceId: {
        type: Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  status: {
    type: String,
    required: true,
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
