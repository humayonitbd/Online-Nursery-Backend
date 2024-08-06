
import { z } from 'zod';

// Define the Zod schema for Product
const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Product Title is required'),
    price: z.number().positive('Product Price must be positive'),
    rating: z
      .number()
      .min(0, 'Rating cannot be less than 0')
      .max(5, 'Rating cannot be more than 5'),
    image: z.string().min(1, 'Product Image are required'),
    description: z.string().min(1, 'Product description are required'),
    stock: z.number().min(1, 'Product Details are required'),
    isDeleted: z.boolean().default(false).optional(),
    category: z.string().min(1, 'Category  is required'),
    totalRating: z.number().optional().default(1),
    brand: z.string().min(1, 'Brand is requiered'),
  }),
});
const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Product Title is required').optional(),
    price: z.number().optional(),
    rating: z
      .number()
      .min(0, 'Rating cannot be less than 0')
      .max(5, 'Rating cannot be more than 5')
      .optional(),
    image: z.string().min(1, 'Product Image are required').optional(),
    description: z
      .string()
      .min(1, 'Product description are required')
      .optional(),
    stock: z.number().min(1, 'Product Details are required').optional(),
    isDeleted: z.boolean().default(false).optional(),
    category: z.string().min(1, 'Category  is required').optional(),
    totalRating: z.number().optional().default(1),
    brand: z.string().min(1, 'Brand is requiered').optional(),
  }),
});


export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};