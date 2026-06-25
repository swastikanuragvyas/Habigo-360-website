const express = require("express");
const Project = require("../models/Project");
const { protect } = require("../middleware/authMiddleware");
const { upload, cloudinary } = require("../config/cloudinary");

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get("/", async (req, res) => {
  try {
    // If not authenticated, only return visible projects
    // For simplicity, we just return all projects and let frontend filter, 
    // or we can check token. Since this is a public route, let's just return all and sort by sortOrder.
    const projects = await Project.find().sort({ sortOrder: 1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/projects/:id
// @desc    Get project by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private
router.post("/", protect, async (req, res) => {
  try {
    const { title, service, description, metrics, kpis, media, visibility, sortOrder, category } = req.body;
    
    const project = new Project({
      title,
      service,
      description,
      metrics,
      kpis,
      media,
      visibility,
      sortOrder,
      category,
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    const { title, service, description, metrics, kpis, media, visibility, sortOrder, category } = req.body;
    const project = await Project.findById(req.params.id);

    if (project) {
      project.title = title || project.title;
      project.service = service || project.service;
      project.description = description || project.description;
      project.metrics = metrics || project.metrics;
      project.kpis = kpis || project.kpis;
      project.media = media || project.media;
      if (category !== undefined) project.category = category;
      if (visibility !== undefined) project.visibility = visibility;
      if (sortOrder !== undefined) project.sortOrder = sortOrder;

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      await project.deleteOne();
      res.json({ message: "Project removed" });
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   POST /api/projects/upload
// @desc    Upload media to Cloudinary
// @access  Private
router.post("/upload", protect, upload.single("media"), (req, res) => {
  if (req.file) {
    res.json({
      url: req.file.path,
      format: req.file.mimetype.split("/")[0], // "image" or "video"
    });
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
});

module.exports = router;
