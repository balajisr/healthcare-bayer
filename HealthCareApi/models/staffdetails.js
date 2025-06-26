const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  staffId: String,
  roleId: String,
  phoneNumber: String,
  selectedRole: String,
  selectedShift: String,
});

module.exports = mongoose.model("staffdetails", userSchema);
