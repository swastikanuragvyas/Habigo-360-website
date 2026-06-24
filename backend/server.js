const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/careers", require("./routes/careers"));
app.use("/api/settings", require("./routes/settings"));
app.use("/api/admins", require("./routes/admins"));
app.use("/api/testimonials", require("./routes/testimonials"));
app.use("/api/case-studies", require("./routes/case-studies"));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/contact", require("./routes/contact"));
app.use("/api/instagram", require("./routes/instagram"));

const PORT = process.env.PORT || 5000;

// Start Cron Jobs
require("./cron/dailySync")();

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Express Error:", err.message, err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));