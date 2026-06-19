const express = require("express");
const router = express.Router();
const InstagramFeed = require("../models/InstagramFeed");

// GET /api/instagram/feed
// Returns the latest Instagram posts/reels
router.get("/feed", async (req, res) => {
  try {
    const feed = await InstagramFeed.find({ type: { $ne: "STORY" } })
      .sort({ timestamp: -1 })
      .limit(12);
    res.json(feed);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// GET /api/instagram/stories
// Returns active stories
router.get("/stories", async (req, res) => {
  try {
    // Ideally filter stories by past 24 hours, but for now we'll just return latest
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const stories = await InstagramFeed.find({ 
      type: "STORY",
      timestamp: { $gte: oneDayAgo }
    }).sort({ timestamp: -1 });
    
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
