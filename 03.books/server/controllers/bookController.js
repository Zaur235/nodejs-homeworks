const Book = require('../models/bookModel');

// Получить все книги
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Добавить новую книгу
const createBook = async (req, res) => {
  const { title, author, year } = req.body;

  try {
    const newBook = new Book({ title, author, year });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Удалить книгу
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBooks, createBook, deleteBook };
