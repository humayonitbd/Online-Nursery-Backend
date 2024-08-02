

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductController } from './product.controller';
import authValidation from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';


const router = express.Router();

router.post(
  '/create-product',
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getSingleProduct);
router.delete('/:id', ProductController.deleteSingleProduct);
router.put('/:id', validateRequest(ProductValidation.updateProductValidationSchema), ProductController.updateSingleProduct);

export const ProductRoutes = router;
