const express = require('express');
const { borrowBook, returnBook, getAllTransactions } = require('../controllers/borrowingController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/borrow', authenticate, authorize(['Member']), borrowBook);
router.put('/return/:id', authenticate, authorize(['Member']), returnBook);
router.get('/', authenticate, authorize(['Admin']), getAllTransactions);

module.exports = router; 