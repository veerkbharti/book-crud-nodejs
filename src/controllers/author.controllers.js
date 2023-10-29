import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Author from "../models/author.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addAuthor = catchAsyncErrors(async (req, res, next) => {
  const author = await Author.create(req.body);

  res
    .status(200)
    .json({ success: true, message: "Author added successfully", author });
});

export const getAllAuthors = catchAsyncErrors(async (req, res, next) => {
  const authors = await Author.find();

  res.status(200).json({ success: true, authors });
});

export const getSingleAuthor = catchAsyncErrors(async (req, res, next) => {
  const author = await Author.findById(req.params.id);

  if (!author)
    return next(new ErrorHandler("Author not found", 404))

    res.status(200).json({ success: true, author });
});
