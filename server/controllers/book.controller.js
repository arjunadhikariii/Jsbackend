// import { Book } from "../models/book.model.js";
// import { CustomError } from "../utils/customError.js";

// // export const createBook = async (req, res) => {
// //   const id = req.id;
// //   try {
// //     const { bookName, publishDate, authorName, description  } = req.body;
// //     const userExists = await User.findById(id);
// //     if (!userExists) {
// //       return res.status(404).json({ message: "USER NOT FOUND!" });
// //     }

// //     const book = new Book({
// //       bookName, 
// //       publishDate,
// //        authorName,
// //         description ,
// //       createdBy: id,
// //     });
// //     await book.save();
// //     userExists.books.push(book._id);
// //     await userExists.save();

// //     res.status(201).json(book);
// //   } catch (error) {
// //     throw new CustomError("Internal Server Error !", 500);
// //   }
// // };
// // Create a new book
// export const createBook = async (req, res) => {
//   const id = req.id;
//   // const { bookName, publishDate, authorName, description } = req.body;
//   try {
//     const { bookName, publishDate, authorName, description } = req.body;
//     const userExists = await User.findById(id);
//     if (!userExists) {
//       return res.status(404).json({ message: "USER NOT FOUND!" });
//     }
//     const book = new Book({ bookName, publishDate, authorName, description, createdBy: id, });
   
//     await book.save();
//     userExists.books.push(book._id);
//     await userExists.save();
//     res.status(201).json(book);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error !" });
//   }
// };

// // Get all books
// export const getBooks = async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error !" });
//   }
// };

// // Get a book by ID
// export const getBookById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id);
//     if (!book) {
//       return res.status(404).json({ message: "Book not found !" });
//     }
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error !" });
//   }
// };
// // Get a book by authorName
// export const getBooksByAuthor = async (req, res) => {
//     try {
//       const { authorName } = req.params;
//       const books = await Book.find({ authorName });
//       if (books.length === 0) {
//         return res.status(404).json({ message: "No books found by this author !" });
//       }
//       res.status(200).json(books);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Internal server error !" });
//     }
//   };
  

// // Update a book by ID
// export const updateBook = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { bookName, publishDate, authorName, description } = req.body;

//     const updateData = { bookName, publishDate, authorName, description };

//     const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });

//     if (!updatedBook) {
//       return res.status(404).json({ message: "Book not found !" });
//     }

//     res.status(200).json(updatedBook);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error !" });
//   }
// };

// // Delete a book by ID
// export const deleteBookById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBook = await Book.findByIdAndDelete(id);
//     if (!deletedBook) {
//       return res.status(404).json({ message: "Book not found !" });
//     }
//     res.status(200).json({ message: "Book deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error !" });
//   }
// };

import { Book } from "../models/book.model.js";
import { User } from "../models/user.model.js"; // Import the User model
import { CustomError } from "../utils/customErrors.js";

// Create a new book
export const createBook = async (req, res) => {
  const id = req.id;
  const { bookName, publishDate, authorName, description } = req.body;

  try {
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found!" });
    }

    const book = new Book({
      bookName,
      publishDate,
      authorName,
      description,
      createdBy: id,
    });

    await book.save();
    userExists.books.push(book._id);
    await userExists.save();

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

// Get a book by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found!" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

// Get books by authorName
export const getBooksByAuthor = async (req, res) => {
  try {
    const { authorName } = req.params;
    const books = await Book.find({ authorName });
    if (books.length === 0) {
      return res.status(404).json({ message: "No books found by this author!" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
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
      return res.status(404).json({ message: "Book not found!" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

// Delete a book by ID
export const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found!" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};
