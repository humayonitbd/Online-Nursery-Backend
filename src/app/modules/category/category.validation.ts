import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Category Name is required'),
    image: z.string().min(1, 'Category Image is required'),
    isDeleted: z.boolean().optional().default(false),
  }),
});




export const CategoryValidation = {
  createCategoryValidationSchema,
};