import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import {
  createBook,
  deleteBookById,
  getBookById,
  getBooks,
  getBooksByAuthor,
  updateBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/book",verifyToken, createBook);
router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.get("/books/author/:authorName", getBooksByAuthor); 
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBookById);

export default router;

