const cron = require("node-cron");
const { fetchLatestInstagramMedia } = require("../services/instagram");

// Run every day at Midnight (0 0 * * *)
const startCronJobs = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("[Cron] Running daily Instagram sync...");
    await fetchLatestInstagramMedia();
    console.log("[Cron] Instagram sync completed.");
  });
  
  // Also run immediately on server startup in the background
  console.log("[Cron] Scheduling Instagram sync on startup...");
  fetchLatestInstagramMedia().catch(err => console.error(err));
};

module.exports = startCronJobs;
