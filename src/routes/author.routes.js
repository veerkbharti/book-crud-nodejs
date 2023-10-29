import { Router } from "express";
import {
  addAuthor,
  getAllAuthors,
  getSingleAuthor,
} from "../controllers/author.controllers.js";

const router = Router();

router.route("/authors/new").post(addAuthor);
router.route("/authors").get(getAllAuthors);
router.route("/authors/:id").get(getSingleAuthor);

export default router;
