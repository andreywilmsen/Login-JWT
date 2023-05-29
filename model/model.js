const mongoose = require("mongoose");

let userModel = new mongoose.Schema({
  name: { type: String, required: true, minlenght: 3, maxlenght: 50 },
  email: { type: String, required: true, minlenght: 3, maxlenght: 50 },
  password: { type: String, required: true, minlenght: 3, maxlenght: 50 },
  createdAt: { type: Date, required: true, default: Date.now() },
  admin: { type: Boolean, required: true, default: false },
});

module.exports = UserModel = mongoose.model("UserModel", userModel);
