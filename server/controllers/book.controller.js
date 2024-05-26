import { Book } from "../models/book.model.js";

// Create a new book
export const createBook = async (req, res) => {
  const { bookName, publishDate, authorName, description } = req.body;
  try {
    const book = new Book({ bookName, publishDate, authorName, description });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

// Get a book by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found !" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};
// Get a book by authorName
export const getBooksByAuthor = async (req, res) => {
    try {
      const { authorName } = req.params;
      const books = await Book.find({ authorName });
      if (books.length === 0) {
        return res.status(404).json({ message: "No books found by this author !" });
      }
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error !" });
    }
  };
  

// Update a book by ID
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { bookName, publishDate, authorName, description } = req.body;

    const updateData = { bookName, publishDate, authorName, description };

    const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found !" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

// Delete a book by ID
export const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found !" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};
