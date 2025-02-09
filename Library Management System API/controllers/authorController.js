const Author = require('../models/Author');

// Add a new author (Admin only)
const addAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate('books');
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get author by ID
const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('books');
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addAuthor, getAllAuthors, getAuthorById };  