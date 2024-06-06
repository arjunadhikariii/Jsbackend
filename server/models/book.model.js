// import mongoose, { Schema } from "mongoose";

// const bookSchema = new mongoose.Schema(
//   {
//     bookName: {
//       type: String,
//       required: true,
//     },
//     publishDate: {
//       type: Date,
//       required: true,
//     },
//     authorName: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     // bookCode: {
//     //   type: String,
//     //   required: true,
//     //   unique: true,
//     createdBy: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
  
//   { timestamps: true }
// );

// export const Book = mongoose.model("Book", bookSchema);
import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
