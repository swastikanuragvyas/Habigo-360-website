const mongoose = require("mongoose");

const siteSettingSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true, // e.g. "hero_image_1", "founder_1"
    },
    type: {
      type: String,
      enum: ["image", "text", "json"],
      default: "text",
    },
    value: {
      type: String, // Stringified JSON, simple text, or image URL
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SiteSetting = mongoose.model("SiteSetting", siteSettingSchema);
module.exports = SiteSetting;
