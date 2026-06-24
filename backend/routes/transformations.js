const express = require("express");
const Transformation = require("../models/Transformation");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/transformations
// @desc    Get all transformations
// @access  Public
router.get("/", async (req, res) => {
  try {
    const transformations = await Transformation.find().sort({ sortOrder: 1 });
    res.json(transformations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   POST /api/transformations
// @desc    Create a transformation
// @access  Private
router.post("/", protect, async (req, res) => {
  try {
    const { title, beforeImage, afterImage, beforeLabel, afterLabel, visibility, sortOrder } = req.body;
    
    const trans = new Transformation({
      title,
      beforeImage,
      afterImage,
      beforeLabel,
      afterLabel,
      visibility,
      sortOrder,
    });

    const createdTrans = await trans.save();
    res.status(201).json(createdTrans);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   PUT /api/transformations/:id
// @desc    Update a transformation
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    const { title, beforeImage, afterImage, beforeLabel, afterLabel, visibility, sortOrder } = req.body;
    const trans = await Transformation.findById(req.params.id);

    if (trans) {
      if (title !== undefined) trans.title = title;
      if (beforeImage !== undefined) trans.beforeImage = beforeImage;
      if (afterImage !== undefined) trans.afterImage = afterImage;
      if (beforeLabel !== undefined) trans.beforeLabel = beforeLabel;
      if (afterLabel !== undefined) trans.afterLabel = afterLabel;
      if (visibility !== undefined) trans.visibility = visibility;
      if (sortOrder !== undefined) trans.sortOrder = sortOrder;

      const updatedTrans = await trans.save();
      res.json(updatedTrans);
    } else {
      res.status(404).json({ message: "Transformation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   DELETE /api/transformations/:id
// @desc    Delete a transformation
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const trans = await Transformation.findById(req.params.id);

    if (trans) {
      await trans.deleteOne();
      res.json({ message: "Transformation removed" });
    } else {
      res.status(404).json({ message: "Transformation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
