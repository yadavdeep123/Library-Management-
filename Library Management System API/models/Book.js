const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ISBN: { type: String, unique: true, required: true },
  summary: String,
  publicationDate: Date,
  genres: [String],
  copiesAvailable: { type: Number, default: 1 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  borrowedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Book', bookSchema);