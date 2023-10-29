import { Router } from "express";
import { addAuthor } from "../controllers/author.controllers.js";

const router = Router();

router.route("/authors/new").post(addAuthor);

export default router;
