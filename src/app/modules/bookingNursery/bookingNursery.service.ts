

import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { Nursery } from '../nursery/nursery.model';
import { TBookingNursery } from './bookingNursery.interface';
import { BookingNursery } from './bookingNursery.model';


const createBookingNurseryServic = async (payload: TBookingNursery) => {

    const nurseryStock = await Nursery.findById(payload.nurseryId);
    if(!nurseryStock){
        throw new AppError(404,"Nursery is not Found!!")
    }

    
    
  const existingBooking = await BookingNursery.findOne({
    nurseryId: payload.nurseryId,
  });

  if (!existingBooking) {
      payload.quantity = 1;
    } else {
        if (existingBooking.quantity === undefined) {
        throw new Error('Invalid existing booking data');
      }
      existingBooking.quantity += 1;
      await existingBooking.save(); 
      return existingBooking; 
    }

    if(nurseryStock?.stock < payload?.quantity){
        throw new Error('Product is stok-out!!')

    }


    const result = await BookingNursery.create(payload);
    return result;
}


const getAllBookingNurseryService = async (query: Record<string, unknown>) => {
  const BookingNurseryQuery = new QueryBuilder(
    BookingNursery.find({ isDeleted: false }).populate('categoryId'),
    query,
  )
    .search(['title', 'price'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await BookingNurseryQuery.modelQuery;
  const meta = await BookingNurseryQuery.countTotal();
  return { meta, result };
};


const getSingleBookingNurseryServic = async (payload: string) => {

  const existingBookingById = await BookingNursery.findById( payload );

  if (!existingBookingById){
    throw new AppError(httpStatus.NOT_FOUND,"Nursery is not found!!")
  }
   const result = await BookingNursery.findById(payload);
  return result;
};

const deleteSingleBookingNurseryServic = async (payload: string) => {

  const existingBookingById = await BookingNursery.findById( payload );

  if (!existingBookingById){
    throw new AppError(httpStatus.NOT_FOUND,"Nursery is not found!!")
  }
   const result = await BookingNursery.findByIdAndUpdate(
     payload,
     { isDeleted: true },
     { new: true, runValidators: true },
   );
  return result;
};


export const BookingNurseryService = {
  createBookingNurseryServic,
  getAllBookingNurseryService,
  getSingleBookingNurseryServic,
  deleteSingleBookingNurseryServic,
};
