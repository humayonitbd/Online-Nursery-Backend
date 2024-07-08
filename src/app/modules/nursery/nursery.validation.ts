
import { z } from 'zod';

// Define the Zod schema for Nursery
const createNurseryValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Nursery Title is required'),
    price: z.number().positive('Nursery Price must be positive'),
    rating: z
      .number()
      .min(0, 'Rating cannot be less than 0')
      .max(5, 'Rating cannot be more than 5'),
    image: z.string().min(1, 'Nursery Image are required'),
    details: z.string().min(1, 'Nursery Details are required'),
    stock: z.number().min(1, 'Nursery Details are required'),
    isDeleted: z.boolean().default(false).optional(),
    categoryId: z.string().min(1, 'Category ID is required'),
  }),
});




export const NurseryValidation = {
  createNurseryValidationSchema,
};