import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  isbn: String,
  type: String,
  image: String,
  ratings: { type: [Number], default: [] } // Store ratings as an array
});

export default mongoose.model("Book", bookSchema);
