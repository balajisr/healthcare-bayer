const mongoose = require("mongoose");

const shiftConfigure = new mongoose.Schema({
  shiftId: {
    type: Number,
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

module.exports = mongoose.model("shiftconfigure", shiftConfigure);
