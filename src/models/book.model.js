import { Schema, model } from "mongoose";

const bookSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: Schema.ObjectId,
      ref: "Author",
      require: true,
    },

    summary: {
      type: String,
    },
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);
export default Book;
