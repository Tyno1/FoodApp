const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Shop",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  paymentIntentId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "complete", "cancelled"],
    default: "pending",
  },
  subtotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
