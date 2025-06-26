const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  staffId: String,
  role: String,
  phoneNumber: String,
  selectedRole: String,
  selectedShift: String,
});

module.exports = mongoose.model("StaffList", userSchema);
