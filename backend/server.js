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
app.use("/api/transformations", require("./routes/transformations"));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/contact", require("./routes/contact"));
app.use("/api/instagram", require("./routes/instagram"));

const PORT = process.env.PORT || 5000;

// Start Cron Jobs
require("./cron/dailySync")();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));