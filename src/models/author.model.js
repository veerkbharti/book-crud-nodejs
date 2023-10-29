import { Schema, model } from "mongoose";

const authorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
    },

    dateOfDeath: {
      type: Date,
    },

    nationality: String,
    biography: String,
  },
  { timestamps: true }
);

const Author = model("Author", authorSchema);
export default Author;
