import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";


// Define the Plant schema
const CategorySchema = new Schema<TCategory>(
  {
    name: { type: String, required: [true, 'Category Name is required'] },
    image: { type: String, required: [true, 'Category Image is required'] },
    isDeleted: { type: Boolean, default:false },
  },
  {
    timestamps: true,
  },
);


export const Category = model<TCategory>('Category', CategorySchema);