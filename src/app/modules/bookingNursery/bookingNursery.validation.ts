

import { z } from 'zod';

// Define the Zod schema for Nursery
const BookingNurseryValidationSchema = z.object({
  body: z.object({
    quantity: z
      .number()
      .min(1, 'Booking Nursery Details are required')
      .optional(),
    price: z.number().min(1, 'Price ID is required'),
    payment: z.boolean().default(false).optional(),
    isDeleted: z.boolean().default(false).optional(),
    nurseryId: z.string().min(1, 'Category ID is required'),
  }),
});

export const BookingNurseryValidation = {
  BookingNurseryValidationSchema,
};