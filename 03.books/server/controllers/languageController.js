const Language = require("../models/Language");
const Book = require("../models/bookModel");

exports.createLanguage = async (req, res) => {
  try {
    const language = await Language.create(req.body);
    res.status(201).json(language);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLanguageById = async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    if (!language) return res.status(404).json({ message: "Language not found" });
    res.json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLanguage = async (req, res) => {
  try {
    const language = await Language.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!language) return res.status(404).json({ message: "Language not found" });
    res.json(language);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLanguage = async (req, res) => {
  try {
    const existingBook = await Book.findOne({ language: req.params.id });
    if (existingBook) {
      return res.status(409).json({ message: "Language is used by a book" });
    }

    const language = await Language.findByIdAndDelete(req.params.id);
    if (!language) return res.status(404).json({ message: "Language not found" });
    res.json({ message: "Language deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
