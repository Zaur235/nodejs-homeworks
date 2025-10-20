const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');
const { getBooks } = require('../controllers/bookController');

router.get('/', getBooks);

router.post('/', async (req, res) => {
  const { title, author, year } = req.body;
  try {
    const newBook = new Book({ title, author, year });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
