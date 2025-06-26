const mongoose = require("mongoose");

const shifts = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shiftFrom: {
    type: Number,
    require: true,
  },
  shiftTo: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("shifts", shifts);
