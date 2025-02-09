const express = require('express');
const { getAllUsers, getUserProfile } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', authenticate, authorize(['Admin']), getAllUsers);
router.get('/profile', authenticate, getUserProfile);

module.exports = router