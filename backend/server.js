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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use("/api/contact", require("./routes/contact"));