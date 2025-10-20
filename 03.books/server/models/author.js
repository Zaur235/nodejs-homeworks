const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3
  },
  bio: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Author", authorSchema);
