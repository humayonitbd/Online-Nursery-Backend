
import { Types } from 'mongoose';

export type TBookingProduct = {
  ProductId: Types.ObjectId;
  price: number;
  payment?: boolean;
  quantity?: number;
  isDeleted?: boolean;
};