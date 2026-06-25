const mongoose = require("mongoose");

const transformationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    beforeImage: { type: String, required: true },
    afterImage: { type: String, required: true },
    beforeLabel: { type: String, default: "Before" },
    afterLabel: { type: String, default: "After" },
    visibility: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transformation", transformationSchema);
