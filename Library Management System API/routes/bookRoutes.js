const express = require('express');
const { addBook, getAllBooks, getBookById } = require('../controllers/bookController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), addBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);

module.exports = router; 