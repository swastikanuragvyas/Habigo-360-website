const express = require("express");
const CaseStudy = require("../models/CaseStudy");

const router = express.Router();

// GET all case studies
router.get("/", async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new case study
router.post("/", async (req, res) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);
    res.status(201).json(caseStudy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a case study
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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

module.exports = router;
