const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/authors', require('./routes/authorRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/borrowings', require('./routes/borrowingRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));