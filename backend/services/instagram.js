const axios = require("axios");
const InstagramFeed = require("../models/InstagramFeed");

const IG_GRAPH_URL = "https://graph.instagram.com/v19.0"; // Or current version

async function fetchLatestInstagramMedia() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID;

  if (!token || !accountId) {
    console.warn("[Instagram Sync] Skipping sync: INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_ACCOUNT_ID is missing from .env");
    return;
  }

  try {
    // Fetch Media (Posts, Reels, Carousels)
    const mediaUrl = `${IG_GRAPH_URL}/${accountId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=20&access_token=${token}`;
    const response = await axios.get(mediaUrl);
    
    if (response.data && response.data.data) {
      await syncMediaToDB(response.data.data);
    }

    // Fetch Stories
    const storiesUrl = `${IG_GRAPH_URL}/${accountId}/stories?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;
    try {
      const storiesResponse = await axios.get(storiesUrl);
      if (storiesResponse.data && storiesResponse.data.data) {
        await syncMediaToDB(storiesResponse.data.data, true);
      }
    } catch (err) {
      console.error("[Instagram Sync] Failed to fetch stories (Account might not have Professional status or no active stories)", err.message);
    }

  } catch (error) {
    console.error("[Instagram Sync] Error fetching media:", error.message);
  }
}

async function syncMediaToDB(mediaItems, isStory = false) {
  for (const item of mediaItems) {
    try {
      await InstagramFeed.findOneAndUpdate(
        { instagramId: item.id },
        {
          instagramId: item.id,
          type: isStory ? "STORY" : item.media_type, // IMAGE, VIDEO, CAROUSEL_ALBUM
          mediaUrl: item.media_url,
          thumbnailUrl: item.thumbnail_url || item.media_url,
          caption: item.caption || "",
          permalink: item.permalink || "",
          timestamp: new Date(item.timestamp),
        },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.error(`[Instagram Sync] Error saving media ${item.id} to DB:`, err.message);
    }
  }
}

module.exports = {
  fetchLatestInstagramMedia,
};
