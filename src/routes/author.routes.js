import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAllAuthors,
  getSingleAuthor,
  updateAuthor,
} from "../controllers/author.controllers.js";

const router = Router();

router.route("/authors/new").post(addAuthor);
router.route("/authors").get(getAllAuthors);
router
  .route("/authors/:id")
  .get(getSingleAuthor)
  .put(updateAuthor)
  .delete(deleteAuthor);

export default router;
