const express = require("express");
const Transformation = require("../models/Transformation");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Transformation.find().sort({ sortOrder: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const created = await Transformation.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const updated = await Transformation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    await Transformation.findByIdAndDelete(req.params.id);
    res.json({ message: "Removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
