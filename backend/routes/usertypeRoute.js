const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userTypeSchema = new Schema({
  name: {
    type: String, // Root, Admin, Manager, Staff or User
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const UserType = model("UserType", userTypeSchema);

module.exports = UserType;
