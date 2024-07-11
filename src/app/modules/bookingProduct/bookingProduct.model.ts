import { Schema, model } from 'mongoose';
import { TBookingProduct } from './bookingProduct.interface';

const BookingProductSchema = new Schema<TBookingProduct>(
  {
    payment: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      required: [true, 'Booking Product Quantity are required'],
    },
    price: {
      type: Number,
      required: [true, 'Booking Product Price are required'],
    },
    isDeleted: { type: Boolean, default: false },
    ProductId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product ID is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const BookingProduct = model<TBookingProduct>(
  'BookingProduct',
  BookingProductSchema,
);
