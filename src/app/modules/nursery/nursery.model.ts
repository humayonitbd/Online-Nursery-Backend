import { Schema, model } from "mongoose";
import { TNursery } from "./nursery.interface";



const NurserySchema = new Schema<TNursery>(
  {
    title: { type: String, required: [true, 'Nursery Title is required'] },
    price: { type: Number, required: [true, 'Nursery Price is required'] },
    rating: {
      type: Number,
      required: [true, 'Nursery Rating is required'],
      min: 0,
      max: 5,
    },
    image: { type: String, required: [true, 'Nursery Image are required'] },
    details: { type: String, required: [true, 'Nursery Details are required'] },
    isDeleted: { type: Boolean, default: false },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Nursery ID is required'],
    },
  },
  {
    timestamps: true,
  },
);


export const Nursery = model<TNursery>('Nursery', NurserySchema);