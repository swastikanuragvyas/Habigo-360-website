const mongoose = require("mongoose");
const Admin = require("./models/Admin");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const setupFounders = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // 1. Rename existing admin(s) to Anushka
    // (We will update all existing admins that have name "Founder admin 1" or "Admin User" or don't have a name yet)
    await Admin.updateMany(
      {},
      { $set: { name: "Anushka", role: "Founder" } }
    );
    console.log("Updated existing admin to Anushka.");

    // 2. Create Sourabh if he doesn't exist
    const sourabhExists = await Admin.findOne({ email: "sourabh@habigo360.com" });
    if (!sourabhExists) {
      const sourabh = new Admin({
        name: "Sourabh",
        email: "sourabh@habigo360.com",
        password: "password123",
        role: "Founder"
      });
      await sourabh.save();
      console.log("Created new admin account for Sourabh.");
    } else {
      console.log("Sourabh's account already exists.");
    }
    
    console.log("Done!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

setupFounders();
