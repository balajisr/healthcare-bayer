const mongoose = require("mongoose");

const attendance = new mongoose.Schema({
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
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
