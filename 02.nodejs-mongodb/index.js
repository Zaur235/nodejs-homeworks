const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(" DB error:", err));

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/categories", async (req, res) => {
  try {
    const { data } = await axios.get("https://northwind.vercel.app/api/categories");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added", data: product });
});

app.delete("/products/:id", async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted", data: deleted });
});

app.put("/products/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Updated", data: updated });
});

app.listen(port, () => console.log(`🚀 Server started on http://localhost:${port}`));
