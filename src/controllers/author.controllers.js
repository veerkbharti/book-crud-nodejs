import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Author from "../models/author.model.js";

export const addAuthor = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
  const author = await Author.create(req.body);

  res
    .status(200)
    .json({ success: true, message: "Author added successfully", author });
});
