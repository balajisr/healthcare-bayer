const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');

router.post('/', async (req, res) => {
  try {
    const { staffId, dateTime, onLeave } = req.body;

    const attendance = new Attendance({
      staffId,
      dateTime,
      onLeave,
    });

    const savedAttendance = await attendance.save();
    res.status(201).json(savedAttendance);
  } catch (err) {
    console.error('Error saving attendance:', err);
    res.status(500).json({ error: 'Failed to save attendance' });
  }
});

module.exports = router;