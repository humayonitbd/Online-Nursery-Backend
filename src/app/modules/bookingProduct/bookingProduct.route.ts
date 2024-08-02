


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

router.get('/users/bookings', BookingProductController.getAllBookingProduct);
router.delete(
  '/users/bookings/:id',
  BookingProductController.deleteSingleBookingProduct,
);
// router.get('/:id', BookingProductController.getSingleBookingProduct);

export const BookingProductRoutes = router;
