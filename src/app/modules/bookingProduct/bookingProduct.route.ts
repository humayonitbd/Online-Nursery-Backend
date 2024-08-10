


import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {  BookingProductValidation } from './bookingProduct.validation';
import { BookingProductController } from './bookingProduct.controller';
import authValidation from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/booking-payment',
  authValidation(USER_ROLE.user),
  validateRequest(BookingProductValidation.BookingProductValidationSchema),
  BookingProductController.createBookingProduct,
);

router.get(
  '/users/bookings',
  authValidation(USER_ROLE.user),
  BookingProductController.getAllBookingProduct,
);
router.delete(
  '/users/bookings/:id',
  BookingProductController.deleteSingleBookingProduct,
);
// router.get('/:id', BookingProductController.getSingleBookingProduct);

export const BookingProductRoutes = router;
