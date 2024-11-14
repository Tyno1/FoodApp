const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const fontSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fallback: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  meta: {
    type: Object,
  },
});

module.exports = model("font", fontSchema);
