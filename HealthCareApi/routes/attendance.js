const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');

router.post('/', async (req, res) => {
  try {
    const { staff, dateTime, isActive } = req.body;
    const newLog = new Attendance({ staff, dateTime, isActive });
    const saved = await newLog.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const logs = await Attendance.find().populate('staff');
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;