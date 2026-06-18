const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    questions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Career = mongoose.model("Career", careerSchema);
module.exports = Career;
