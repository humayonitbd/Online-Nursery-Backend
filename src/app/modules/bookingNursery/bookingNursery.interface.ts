
import { Types } from 'mongoose';

export type TBookingNursery = {
  nurseryId: Types.ObjectId;
  price:number;
  payment?: boolean;
  quantity?:number;
  isDeleted?: boolean;
};