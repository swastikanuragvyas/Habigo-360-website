const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    visibility: {
      type: Boolean,
      default: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    metrics: [
      {
        label: String,
        value: String,
        suffix: String,
      },
    ],
    kpis: [
      {
        label: String,
        value: Number,
        suffix: String,
        trend: { type: String, enum: ["up", "down", "neutral"] },
        trendValue: Number,
      },
    ],
    media: [
      {
        type: { type: String, enum: ["image", "video", "reel"], default: "image" },
        url: String,
        thumbnail: String,
        alt: String,
        caption: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
