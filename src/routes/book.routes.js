import { Router } from "express";
import {
  addBook,
  getAllBooks,
  getBookDetails,
  updateBook,
  deleteBook,
} from "../controllers/book.controllers.js";

const router = Router();

router.route("/books/new").post(addBook);
router.route("/books").get(getAllBooks);
router
  .route("/books/:id")
  .get(getBookDetails)
  .put(updateBook)
  .delete(deleteBook);

export default router;
