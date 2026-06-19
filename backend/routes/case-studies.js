const express = require("express");
const CaseStudy = require("../models/CaseStudy");
const { upload, cloudinary } = require("../config/cloudinary");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// GET all case studies (public)
router.get("/", async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new case study
router.post("/", protect, async (req, res) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);
    res.status(201).json(caseStudy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a case study
router.put("/:id", protect, async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!caseStudy) {
      return res.status(404).json({ message: "Case study not found" });
    }
    res.json(caseStudy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a case study
router.delete("/:id", protect, async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!caseStudy) {
      return res.status(404).json({ message: "Case study not found" });
    }
    res.json({ message: "Case study deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST upload cover image to Cloudinary
router.post("/upload-cover", protect, upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({ url: req.file.path });
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
});

module.exports = router;
