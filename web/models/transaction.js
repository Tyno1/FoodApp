const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Shop",
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
    // enum: ["cash", "credit card", "debit card", "paypal"],
    required: true,
  },
  sessionId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["completed", "failed", "pending"],
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ["product", "service"],
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
