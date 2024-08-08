import { z } from 'zod';

// Define the Zod schema for Product
const createProductReviewValidationSchema = z.object({
  body: z.object({
    reviewMessage: z.string().min(1, 'Product Review is required'),
    reviewAddDate: z.string().min(1, 'Review add date is required'),
    ratingUserName: z.string().min(1, 'Review user name is required'),
    reviewUserEmail: z.string().min(1, 'Review user email is required'),
    ratingUserImg: z.string().min(1, 'Review user image is required'),
    likeTotal: z.number().optional().default(0),
    rating: z
      .number()
      .min(0, 'Rating cannot be less than 0')
      .max(5, 'Rating cannot be more than 5'),
    productId: z.string(),
  }),
});

const updateProductReviewValidationSchema = z.object({
  body: z.object({
    reviewMessage: z.string().min(1, 'Product Review is required').optional(),
    reviewAddDate: z.string().min(1, 'Review add date is required').optional(),
    ratingUserName: z
      .string()
      .min(1, 'Review user name is required')
      .optional(),
    ratingUserImg: z
      .string()
      .min(1, 'Review user image is required')
      .optional(),
    likeTotal: z.number().optional().default(0),
    rating: z
      .number()
      .min(0, 'Rating cannot be less than 0')
      .max(5, 'Rating cannot be more than 5')
      .optional(),
    productId: z.string().optional(),
  }),
});

export const ProductReviewValidation = {
  createProductReviewValidationSchema,
  updateProductReviewValidationSchema,
};
