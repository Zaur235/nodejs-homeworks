const Author = require("../models/author");
const Book = require("../models/bookModel");

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    // проверяем связанность с книгой
    const existingBook = await Book.findOne({ author: req.params.id });
    if (existingBook) {
      return res.status(409).json({ message: "Author is used by a book" });
    }

    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json({ message: "Author deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
