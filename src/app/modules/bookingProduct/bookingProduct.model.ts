import { Schema, model } from 'mongoose';
import { TBookingProduct } from './bookingProduct.interface';

const BookingProductSchema: Schema = new Schema(
  {
    orderProductTitle: {
      type: String,
      required: [true, 'orderProductTitle is required'],
    },
    orderProductPrice: {
      type: Number,
      required: [true, 'orderProductPrice is required'],
    },
    orderProductCategory: {
      type: String,
      required: [true, 'orderProductCategory is required'],
    },
    orderProductQuantity: {
      type: Number,
      required: [true, 'orderProductQuantity is required'],
    },
    transactionId: {
      type: Schema.Types.Mixed,
      required: [true, 'transactionId is required'],
    },
    userEmail: {
      type: String,
      required: [true, 'userEmail is required'],
    },
    orderProductId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    
  },
  { timestamps: true },
);

export const BookingProduct = model<TBookingProduct>(
  'BookingProduct',
  BookingProductSchema,
);
