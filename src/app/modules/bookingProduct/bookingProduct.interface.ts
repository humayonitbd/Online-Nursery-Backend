
import { Types } from 'mongoose';

export type TBookingProduct = {
  orderProductTitle: string;
  orderProductPrice: number;
  orderProductCategory: string;
  orderProductQuantity: number;
  transactionId: string | number;
  userEmail: string;
  orderProductId: Types.ObjectId;
};