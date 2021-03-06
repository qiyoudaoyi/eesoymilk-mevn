import mongoose, { Schema, Types } from "mongoose";

interface Blog {
  title: string,
  body: string,
  tags: string[],
  _id: Types.ObjectId,
  createdAt: Date,
  updatedAt: Date
}

const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Blog", blogSchema);
