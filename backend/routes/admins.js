const express = require("express");
const Admin = require("../models/Admin");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/admins
// @desc    Get all admins
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    const admins = await Admin.find({}).select("-password");
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/admins
// @desc    Create a new admin
// @access  Private
router.post("/", protect, async (req, res) => {
  const { name, role, email, password } = req.body;

  try {
    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({
      name: name || "Admin User",
      role: role || "Admin",
      email,
      password,
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        role: admin.role,
        email: admin.email,
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/admins/:id
// @desc    Delete admin
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);

    if (admin) {
      if (admin._id.toString() === req.admin._id.toString()) {
        return res.status(400).json({ message: "You cannot delete yourself." });
      }

      await admin.deleteOne();
      res.json({ message: "Admin removed" });
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
