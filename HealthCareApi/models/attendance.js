const mongoose = require("mongoose");

const attendance = new mongoose.Schema({
  staffId: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: true,
  },
  onLeave: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model("attendance", attendance);
