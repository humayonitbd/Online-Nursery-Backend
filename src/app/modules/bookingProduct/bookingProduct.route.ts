


import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingNurseryValidation } from './bookingProduct.validation';
import { BookingProductController } from './bookingProduct.controller';

const router = express.Router();

router.post(
  '/create-nursery-booking',
  validateRequest(BookingNurseryValidation.BookingNurseryValidationSchema),
  BookingProductController.createBookingProduct,
);

router.get('/', BookingProductController.getAllBookingProduct);
router.get('/:id', BookingProductController.getSingleBookingProduct);
router.delete('/:id', BookingProductController.deleteSingleBookingProduct);

export const BookingNurseryRoutes = router;
