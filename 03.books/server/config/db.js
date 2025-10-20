const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://books235:books235@books.ummiiky.mongodb.net/Books?retryWrites=true&w=majority&appName=books"
    );
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
