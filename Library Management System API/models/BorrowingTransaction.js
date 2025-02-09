const mongoose = require('mongoose');

const borrowingSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  borrowDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: Date,
  status: { type: String, enum: ['Borrowed', 'Returned'], default: 'Borrowed' }
});

module.exports = mongoose.model('BorrowingTransaction', borrowingSchema);