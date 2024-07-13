

import { z } from 'zod';

export const BookingProductValidationSchema = z.object({
  body: z.object({
    orderProductTitle: z
      .string()
      .min(1, { message: 'Product title is required' }),
    orderProductPrice: z
      .number()
      .min(1, { message: 'Product price must be a required number' }),
    orderProductCategory: z
      .string()
      .min(1, { message: 'Product category is required' }),
    orderProductQuantity: z
      .number()
      .min(1, { message: 'Product quantity is required' }),
    transactionId: z.union([z.string(), z.number()]),
    userEmail: z.string().email({ message: 'Invalid email address' }),
    orderProductId: z.string(),
  }),
});

export const BookingProductValidation = {
  BookingProductValidationSchema,
};