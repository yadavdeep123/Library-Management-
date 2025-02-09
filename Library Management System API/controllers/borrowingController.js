const BorrowingTransaction = require('../models/BorrowingTransaction');

// Borrow a book (Member only)
const borrowBook = async (req, res) => {
  try {
    const { bookId, dueDate } = req.body;
    const transaction = new BorrowingTransaction({
      book: bookId,
      member: req.user.id,
      dueDate,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const returnBook = async (req, res) => {
    try {
      const transaction = await BorrowingTransaction.findById(req.params.id);
      if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
  
      transaction.status = 'Returned';
      transaction.returnDate = new Date();
      await transaction.save();
  
      res.json(transaction);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get all transactions (Admin only)
  const getAllTransactions = async (req, res) => {
    try {
      const transactions = await BorrowingTransaction.find()
        .populate('book')
        .populate('member');
      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = { borrowBook, returnBook, getAllTransactions };