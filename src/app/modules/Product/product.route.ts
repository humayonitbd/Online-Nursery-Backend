

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import { NurseryController } from './product.controller';


const router = express.Router();

router.post(
  '/create-product',
  validateRequest(ProductValidation.createProductValidationSchema),
  NurseryController.createNursery,
);

router.get('/', NurseryController.getAllNursery);
router.get('/:id', NurseryController.getSingleNursery);
router.delete('/:id', NurseryController.deleteSingleProduct);
router.put('/:id', validateRequest(ProductValidation.updateProductValidationSchema), NurseryController.updateSingleProduct);

export const ProductRoutes = router;
