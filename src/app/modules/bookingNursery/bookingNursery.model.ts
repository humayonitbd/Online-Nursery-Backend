
import { Schema, model } from 'mongoose';
import { TBookingNursery } from './bookingNursery.interface';



const BookingNurserySchema = new Schema<TBookingNursery>(
  {
    payment: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      required: [true, 'Booking Nursery Quantity are required'],
    },
    price: {
      type: Number,
      required: [true, 'Booking Nursery Price are required'],
    },
    isDeleted: { type: Boolean, default: false },
    nurseryId: {
      type: Schema.Types.ObjectId,
      ref: 'Nursery',
      required: [true, 'Nursery ID is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const BookingNursery = model<TBookingNursery>('BookingNursery', BookingNurserySchema);