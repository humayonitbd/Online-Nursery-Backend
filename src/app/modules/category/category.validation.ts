import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Category Name is required'),
    isDeleted: z.boolean().optional().default(false),
  }),
});

const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Category Name is required').optional(),
    isDeleted: z.boolean().optional().default(false),
  }),
});




export const CategoryValidation = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};