const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const {
  addShifts,
  configureShifts,
  getShifts,
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

router.get("/getShifts", async (req, res) => {
  await getShifts(req, res);
});

module.exports = router;
