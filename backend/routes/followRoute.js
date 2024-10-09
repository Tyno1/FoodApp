const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const followSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

// Compound index to ensure a user can only follow a restaurant once
followSchema.index({ userId: 1, restaurantId: 1 }, { unique: true });

module.exports = model("Follow", followSchema);
