import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// Fetch all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Add a book
router.post("/add", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.json({ message: "Book added successfully", book });
  } catch (err) {
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
});

// Rate a Book
router.post("/rate/:id", async (req, res) => {
  const { rating } = req.body;

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }

  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    book.ratings.push(rating);
    await book.save();

    const avgRating = (book.ratings.reduce((a, b) => a + b, 0) / book.ratings.length).toFixed(1);

    res.json({ message: "Rating added successfully", averageRating: avgRating });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
