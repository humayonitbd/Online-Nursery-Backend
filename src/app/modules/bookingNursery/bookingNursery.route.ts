


import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingNurseryValidation } from './bookingNursery.validation';
import { BookingNurseryController } from './bookingNursery.controller';

const router = express.Router();

router.post(
  '/create-nursery-booking',
  validateRequest(BookingNurseryValidation.BookingNurseryValidationSchema),
  BookingNurseryController.createBookingNursery,
);

router.get('/', BookingNurseryController.getAllBookingNursery);
router.get('/:id', BookingNurseryController.getSingleBookingNursery);
router.delete('/:id', BookingNurseryController.deleteSingleBookingNursery);

export const BookingNurseryRoutes = router;
