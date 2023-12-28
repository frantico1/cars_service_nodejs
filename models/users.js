const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", UserSchema);
