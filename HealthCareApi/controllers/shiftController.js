const ShiftConfigure = require("../models/shiftConfigure");
const shifts = require("../models/shifts");

exports.addShifts = async (req, res) => {
  try {
    if (req.body.name && req.body.status) {
      const checkShift = await shifts.findOne({
        $and: [
          {
            $or: [
              { shitFrom: { $lt: req.body.shiftFrom } },
              { shitFrom: { $gte: req.body.shiftTo } },
            ],
          },
          {
            $or: [
              { shitTo: { $lt: req.body.shiftTo } },
              { shitFrom: { $gte: req.body.shiftFrom } },
            ],
          },
        ],
      });
      if (checkShift) {
        console.log("yes");
      } else {
        console.log("no");
      }
    }
  } catch (e) {
    res.status(400).json({ message: err.message });
  }
};
exports.configureShifts = async (req, res) => {
  try {
    const checkShift = await ShiftConfigure.findOne({
      shiftType: req.body.shiftType,
      roleType: req.body.roleType,
    });
    if (checkShift) {
      res.status(400).json({ message: "" });
    }
    console.log(checkShift);
    // const shifts = await ShiftConfigure.create(req.body);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};
