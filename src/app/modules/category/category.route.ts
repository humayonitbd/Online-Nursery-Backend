
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';
import { CategoryController } from './category.controller';


const router = express.Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidation.createCategoryValidationSchema),
  CategoryController.createCategory,
);

router.get(
  '/',
  CategoryController.getAllCategory,
);
router.get('/:id', CategoryController.getSingleCategory);
router.delete(
  '/:id',
  CategoryController.deleteSingleCategory,
);
router.put(
  '/:id',
  validateRequest(CategoryValidation.updateCategoryValidationSchema),
  CategoryController.updateSingleCategory,
);


export const CategoryRoutes = router;
