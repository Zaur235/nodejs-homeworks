const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 2,
    maxlength: 3
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Language", languageSchema);
