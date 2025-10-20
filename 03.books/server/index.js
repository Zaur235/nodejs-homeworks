
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const bookRoute = require('./routes/bookRoute');
const genreRoute = require('./routes/genreRoute');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use('/api/books', bookRoute);
app.use('/api/genres', genreRoute);


app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Failed to connect to DB', error);
  }
});
