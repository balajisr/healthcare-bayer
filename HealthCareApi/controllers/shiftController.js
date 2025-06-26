const shiftConfigure = require("../models/shiftConfigure");
const shifts = require("../models/shifts");
const slotassign = require("../models/slotAssign");
const staffdetails = require("../models/staffdetails");
exports.addShifts = async (req, res) => {
  try {
    if (req.body.name && req.body.shiftFrom && req.body.shiftTo) {
      if (req.body.shiftFrom >= req.body.shiftTo) {
        res.status(400).json({
          status: false,
          message: "shiftTo should be greater than shiftFrom",
        });
      } else {
        shifts.create(req.body);
        res.status(200).json({ success: true, message: "Saved Successfully." });
      }
    } else {
      res.status(400).json({ message: "Data not found!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getShifts = async (req, res) => {
  try {
    const getShifts = await shifts.find({ status: true });
    if (getShifts.length > 0) {
      res.status(200).json({ success: true, data: getShifts });
    } else {
      res
        .status(200)
        .json({ success: true, data: [], message: "No data found" });
    }
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};
exports.configureShifts = async (req, res) => {
  try {
    const checkShift = await shiftConfigure.findOne({
      shiftId: req.body.shiftId,
      roleType: req.body.roleType,
    });
    if (checkShift) {
      res.status(400).json({
        status: false,
        message: "Already configured for same shift and role!",
      });
    } else {
      shiftConfigure.create(req.body);
      res.status(200).json({ success: true, message: "Saved Successfully." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.assignedStaff = async (req, res) => {
  try {
    const { staffId, slotId, assignedDate } = req.body;

    const isStaffAssigned = slotassign.findOne({
      staffId: staffId,
      assignedDate: assignedDate,
    });
    if (isStaffAssigned) {
      res.status(400).json({
        success: false,
        message: "Staff is already allocated for date : " + assignedDate,
      });
    } else {
      const staffDetails = await staffdetails
        .findOne({ staffId: staffId })
        .select("roleId");
      const roleId = staffDetails.roleId;
      const getSlotCapacity = await configureShifts.findOne({
        shiftId: slotId,
        roleType: roleId,
      });
      const slotCapacity = getSlotCapacity.capacity;
      const getAssignedSlot = await slotassign
        .find({ slotId: slotId, assignedDate: assignedDate })
        .count();
      if (slotCapacity > getAssignedSlot) {
        slotassign.create(req.body);
        res
          .status(200)
          .json({ success: true, message: "Slot assigned successfully." });
      }
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
exports.shift = async (req, res) => {
  try {
    const {
      fullName,
      staffID,
      phoneNumber,
      selectedRole,
      selectedShift,
    } = req.body;
    const newShift = {
      fullName: fullName,
      staffID: staffID,
      phoneNumber: phoneNumber,
      selectedRole: selectedRole,
      selectedShift: selectedShift,
    };
    return res.status(201).json({
      message: "Shift added successfully",
      shift: newShift,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
