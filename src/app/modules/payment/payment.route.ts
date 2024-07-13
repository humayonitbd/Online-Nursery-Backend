import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PaymentController } from './payment.controller';


const router = express.Router();

router.post(
  '/create-payment-intent',
//   validateRequest(ProductValidation.createProductValidationSchema),
  PaymentController.createPaymentSecret,
);


export const PaymentRoutes = router;
