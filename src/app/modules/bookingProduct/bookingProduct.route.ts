


import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {  BookingProductValidation } from './bookingProduct.validation';
import { BookingProductController } from './bookingProduct.controller';

const router = express.Router();

router.post(
  '/booking-payment',
  validateRequest(BookingProductValidation.BookingProductValidationSchema),
  BookingProductController.createBookingProduct,
);

router.get('/', BookingProductController.getAllBookingProduct);
// router.get('/:id', BookingProductController.getSingleBookingProduct);
// router.delete('/:id', BookingProductController.deleteSingleBookingProduct);

export const BookingProductRoutes = router;
