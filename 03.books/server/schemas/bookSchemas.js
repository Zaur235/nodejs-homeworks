const mongoose = require("mongoose");
const { Schema } = mongoose

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  year: Number,
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
  price: Number
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
