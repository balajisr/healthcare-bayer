const express = require("express");
const router = express.Router();
const {
  shift,
  addShifts,
  configureShifts,
  getShifts,
  assignedStaff,
} = require("../controllers/shiftController");
const { basicAuth } = require("../middleware/basicAuthMiddleware");
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/configureShifts", async (req, res) => {
  await configureShifts(req, res);
});

router.post("/addShifts", async (req, res) => {
  await addShifts(req, res);
});
router.post("/addShiftList", async (req, res) => {
  await shift(req, res);
});
router.post("/addShiftList", async (req, res) => {
  const response = await shift(req, res);
});

router.get("/getShifts", async (req, res) => {
  await getShifts(req, res);
});

router.get("/shiftData", (req, res) => {
  const config = {
    roles: ["Doctor", "Nurse", "technical"],
    shiftPreference: ["Morning", "Evening", "Night"],
  };
  res.json(config);
});

router.post("/assignedStaff", async (req, res) => {
  await assignedStaff(req, res);
});
module.exports = router;
