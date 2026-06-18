const express = require("express");
const SiteSetting = require("../models/SiteSetting");
const { protect } = require("../middleware/authMiddleware");
const { upload } = require("../config/cloudinary");

const router = express.Router();

// GET all settings
router.get("/", async (req, res) => {
  try {
    const settings = await SiteSetting.find();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET specific setting
router.get("/:key", async (req, res) => {
  try {
    const setting = await SiteSetting.findOne({ key: req.params.key });
    if (setting) res.json(setting);
    else res.status(404).json({ message: "Not found" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update or create setting text/json
router.put("/:key", protect, async (req, res) => {
  try {
    const { type, value } = req.body;
    let setting = await SiteSetting.findOne({ key: req.params.key });
    if (setting) {
      setting.value = value;
      setting.type = type || setting.type;
      await setting.save();
    } else {
      setting = new SiteSetting({ key: req.params.key, type: type || "text", value });
      await setting.save();
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Upload image and update setting
router.post("/:key/upload", protect, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image provided" });
    }
    
    const imageUrl = req.file.path;
    
    let setting = await SiteSetting.findOne({ key: req.params.key });
    if (setting) {
      setting.value = imageUrl;
      setting.type = "image";
      await setting.save();
    } else {
      setting = new SiteSetting({ key: req.params.key, type: "image", value: imageUrl });
      await setting.save();
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
