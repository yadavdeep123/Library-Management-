const express = require('express');
const { addAuthor, getAllAuthors, getAuthorById } = require('../controllers/authorController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['Admin']), addAuthor);
router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);

module.exports = router