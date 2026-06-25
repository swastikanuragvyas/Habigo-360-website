require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function run() {
  try {
    fs.writeFileSync("test.txt", "hello world");
    const result = await cloudinary.uploader.upload("test.txt", { resource_type: "raw" });
    console.log("Success:", result.secure_url);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    fs.unlinkSync("test.txt");
  }
}
run();
