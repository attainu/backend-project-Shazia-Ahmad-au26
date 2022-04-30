const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  imageUrl: {
    type: String,
    default: "None",
  },
});

const diaryDetails = mongoose.model("diary", diarySchema);

module.exports = diaryDetails;
