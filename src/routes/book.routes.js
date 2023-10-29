import { Router } from "express";
import {
  addBook,
  getAllBooks,
  getBookDetails,
} from "../controllers/book.controllers.js";

const router = Router();

router.route("/books/new").post(addBook);
router.route("/books").get(getAllBooks);
router.route("/books/:id").get(getBookDetails);

export default router;
