const mongoose = require("mongoose");

const instagramFeedSchema = new mongoose.Schema(
  {
    instagramId: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["IMAGE", "VIDEO", "CAROUSEL_ALBUM", "STORY"],
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String, // Used for videos
    },
    caption: {
      type: String,
    },
    permalink: {
      type: String,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const InstagramFeed = mongoose.model("InstagramFeed", instagramFeedSchema);
module.exports = InstagramFeed;
