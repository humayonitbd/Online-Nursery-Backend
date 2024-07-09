

import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { Nursery } from '../nursery/nursery.model';
import { TBookingNursery } from './bookingNursery.interface';
import { BookingNursery } from './bookingNursery.model';
import mongoose, { Error } from 'mongoose';


const createBookingNurseryServic = async (payload: TBookingNursery) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const nurseryStock = await Nursery.findById(payload.nurseryId).session(
      session,
    );
    if (!nurseryStock) {
      throw new AppError(404, 'Nursery not found!');
    }

    const existingBooking = await BookingNursery.findOne({
      nurseryId: payload.nurseryId,
    }).session(session);

    if (!existingBooking) {
      payload.quantity = 1;
      
      if (nurseryStock.stock < payload.quantity) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Nursery is out of stock!');
      } else {
        nurseryStock.stock -= payload.quantity;
        await nurseryStock.save({ session });
      }

      payload.price = payload.price * payload.quantity;
    } else {
      existingBooking.quantity = (existingBooking.quantity || 0) + 1;
      existingBooking.price = payload.price * existingBooking.quantity;
      
      if (nurseryStock.stock < 1) {
        throw new Error('Nursery is out of stock!');
      } else {
        nurseryStock.stock -= 1;
        await nurseryStock.save({ session });
      }

      await existingBooking.save({ session });
      await session.commitTransaction();
      session.endSession();
      return existingBooking;
    }

    const result = await BookingNursery.create([payload], { session });
    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error:any) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, error.message);
  }
};



const getAllBookingNurseryService = async (query: Record<string, unknown>) => {
  const BookingNurseryQuery = new QueryBuilder(
    BookingNursery.find({ isDeleted: false }).populate('nurseryId'),
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
   const result = await BookingNursery.findById(payload).populate('nurseryId');
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
