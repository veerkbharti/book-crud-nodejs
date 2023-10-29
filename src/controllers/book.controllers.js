import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Book from "../models/book.model.js";
import ErrorHandler from "../utils/errorHandler.js";

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

export const updateBook = catchAsyncErrors(async (req, res, next) => {
  const bookId = req.params.id;
  let book = await Book.findById(bookId);

  if (!book) return next(new ErrorHandler("Book not found", 404));

  book = await Book.findByIdAndUpdate(bookId, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res
    .status(200)
    .json({ success: true, message: "Book updated succesfully", book });
});

export const deleteBook = catchAsyncErrors(async (req, res, next) => {
  const bookId = req.params.id;
  let book = await Book.findById(bookId);

  if (!book) return next(new ErrorHandler("Book not found", 404));

  book = await Book.findByIdAndDelete(bookId);

  res
    .status(200)
    .json({ success: true, message: "Book deleted successfully", book });
});