const mongoose = require("mongoose");

const shiftConfigure = new mongoose.Schema({
  shiftType: {
    type: String,
    required: true,
  },
  roleType: {
    type: String,
    default: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ShiftConfigure", shiftConfigure);
