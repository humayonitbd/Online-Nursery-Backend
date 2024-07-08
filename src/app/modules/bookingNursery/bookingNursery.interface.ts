
import { Types } from 'mongoose';

export type TBookingNursery = {
  nurseryId: Types.ObjectId;
  payment?: boolean;
  quantity?:number;
  isDeleted?: boolean;
};