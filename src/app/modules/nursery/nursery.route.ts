

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { NurseryValidation } from './nursery.validation';
import { NurseryController } from './nursery.controller';


const router = express.Router();

router.post(
  '/create-nursery',
  validateRequest(NurseryValidation.createNurseryValidationSchema),
  NurseryController.createNursery,
);

router.get('/', NurseryController.getAllNursery);

export const NurseryRoutes = router;
