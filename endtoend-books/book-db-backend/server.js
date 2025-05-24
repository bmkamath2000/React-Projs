const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define Book schema and model
const bookSchema = new mongoose.Schema({
  title: String,
  edition: String,
  genre: String,
  author: String,
  publishingDate: Date,
  length: Number,
  breadth: Number,
  thickness: Number,
});

const Book = mongoose.model('Book', bookSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory database
let books = [];

// Routes

// GET /api/books - list all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find().sort({ publishingDate: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books', error: err });
  }
});

// POST /api/books - add a new book
app.post('/api/books', async (req, res) => {
  try {
    const bookData = req.body;
    const newBook = new Book(bookData);
    await newBook.save();
    res.status(201).json({ message: 'Book added', book: newBook });
  } catch (err) {
    res.status(400).json({ message: 'Error adding book', error: err });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
