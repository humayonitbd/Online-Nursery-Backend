import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const ProductSchema = new Schema<TProduct>(
  {
    title: { type: String, required: [true, 'Product Title is required'] },
    price: { type: Number, required: [true, 'Product Price is required'] },
    rating: {
      type: Number,
      required: [true, 'Product Rating is required'],
      min: 0,
      max: 5,
    },
    image: { type: String, required: [true, 'Product Image are required'] },
    description: {
      type: String,
      required: [true, 'Product description are required'],
    },
    stock: { type: Number, required: [true, 'Product Stoke are required'] },
    brand: { type: String, required: [true, 'Product brand are required'] },
    isDeleted: { type: Boolean, default: false },
    totalRating: { type: Number, default: 1 },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', ProductSchema);
