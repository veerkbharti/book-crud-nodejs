import { Router } from "express";
import { addBook } from "../controllers/book.controllers.js";

const router = Router();

router.route("/books/new").post(addBook)

export default router