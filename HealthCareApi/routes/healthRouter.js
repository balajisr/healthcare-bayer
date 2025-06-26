const express = require("express");
const router = express.Router();
const {
  shift,
  addShifts,
  configureShifts,
} = require("../controllers/shiftController");
const { basicAuth } = require("../middleware/basicAuthMiddleware");
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/configureShifts", async (req, res) => {
  const response = await configureShifts(req, res);
});

router.post("/addShifts", async (req, res) => {
  const response = await addShifts(req, res);
});
router.post('/addShiftList', async(req, res) => {
    const response = await shift(req, res);
});

router.get('/shiftData', (req, res) => {
    const config = {
        roles: ['Doctor', 'Nurse', 'technical'],
        shiftPreference: ['Morning', 'Evening', 'Night']
    };
    res.json(config);
});
module.exports = router;
