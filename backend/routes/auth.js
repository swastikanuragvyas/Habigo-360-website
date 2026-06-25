const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @route   POST /api/auth/login
// @desc    Auth admin & get token
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        name: admin.name,
        role: admin.role,
        email: admin.email,
        profilePicture: admin.profilePicture,
        theme: admin.theme,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/auth/register
// @desc    Register a new admin (Protected, only admins can create admins)
// @access  Private
router.post("/register", protect, async (req, res) => {
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
        profilePicture: admin.profilePicture,
        theme: admin.theme,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/auth/me
// @desc    Get current admin profile
// @access  Private
router.get("/me", protect, async (req, res) => {
  res.json({
    _id: req.admin._id,
    name: req.admin.name,
    role: req.admin.role,
    email: req.admin.email,
    profilePicture: req.admin.profilePicture,
    theme: req.admin.theme,
  });
});

// @route   PUT /api/auth/profile
// @desc    Update admin profile
// @access  Private
router.put("/profile", protect, async (req, res) => {
  const admin = await Admin.findById(req.admin._id);

  if (admin) {
    admin.name = req.body.name || admin.name;
    admin.email = req.body.email || admin.email;
    if (req.body.profilePicture !== undefined) {
      admin.profilePicture = req.body.profilePicture;
    }
    if (req.body.theme !== undefined) {
      admin.theme = req.body.theme;
    }
    if (req.body.password) {
      admin.password = req.body.password;
    }

    const updatedAdmin = await admin.save();

    res.json({
      _id: updatedAdmin._id,
      name: updatedAdmin.name,
      role: updatedAdmin.role,
      email: updatedAdmin.email,
      profilePicture: updatedAdmin.profilePicture,
      theme: updatedAdmin.theme,
      token: generateToken(updatedAdmin._id),
    });
  } else {
    res.status(404).json({ message: "Admin not found" });
  }
});

module.exports = router;
