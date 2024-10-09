const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: String,
  contactInfo: String,
  operatingHours: String,
  createdAt: { type: Date, default: Date.now },
  admins: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      role: String,
      authorizationLevel: Number,
    },
  ],
});

module.exports = model("Restaurant", restaurantSchema);
