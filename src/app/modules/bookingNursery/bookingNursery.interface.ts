
import { Types } from 'mongoose';

export type TBookingNursery = {
  categoryId: Types.ObjectId;
  title: string;
  price: number;
  rating: number;
  image: string;
  details: string;
  payment?: boolean;
  isDeleted: boolean;
};