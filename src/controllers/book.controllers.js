import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Book from "../models/book.model.js";

export const addBook = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.create(req.body);

  res
    .status(200)
    .json({ success: true, message: "Book added successfully", book });
});
