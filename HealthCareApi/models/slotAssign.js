const mongoose = require("mongoose");

const slotassign = new mongoose.Schema({
  staffId: {
    type: Number,
    required: true,
  },
  slotId: {
    type: String,
    default: true,
  },
  assignedDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("slotassign", slotassign);
