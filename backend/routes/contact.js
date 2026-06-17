const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Contact API working");
});

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
