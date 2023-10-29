import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Book from "../models/book.model.js";

export const addBook = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.create(req.body);

  res
    .status(200)
    .json({ success: true, message: "Book added successfully", book });
});

export const getAllBooks = catchAsyncErrors(async (req, res, next) => {
  const books = await Book.find();

  res.status(200).json({ success: true, books });
});

export const getBookDetails = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) return next(new ErrorHandler("Book not found", 404));

  res.status(200).json({ success: true, book });
});