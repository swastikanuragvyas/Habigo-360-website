const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    metrics: {
      type: [String], // e.g. ["+300% Traffic", "2.5x ROI"]
      default: [],
    },
    content: {
      type: String, // Could be markdown or HTML
      required: true,
    },
    coverImage: {
      type: String, // URL to cloudinary
    },
    visibility: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CaseStudy", caseStudySchema);
