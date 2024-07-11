import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { Product } from '../Product/product.model';
import mongoose, { Error } from 'mongoose';
import { TBookingProduct } from './bookingProduct.interface';
import { BookingProduct } from './bookingProduct.model';

const createBookingProductServic = async (payload: TBookingProduct) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const ProductStock = await Product.findById(payload.ProductId).session(
      session,
    );
    if (!ProductStock) {
      throw new AppError(404, 'Product not found!');
    }

    const existingBooking = await BookingProduct.findOne({
      ProductId: payload.ProductId,
    }).session(session);

    if (!existingBooking) {
      payload.quantity = 1;

      if (ProductStock.stock < payload.quantity) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Product is out of stock!');
      } else {
        ProductStock.stock -= payload.quantity;
        await ProductStock.save({ session });
      }

      payload.price = payload.price * payload.quantity;
    } else {
      existingBooking.quantity = (existingBooking.quantity || 0) + 1;
      existingBooking.price = payload.price * existingBooking.quantity;

      if (ProductStock.stock < 1) {
        throw new Error('Product is out of stock!');
      } else {
        ProductStock.stock -= 1;
        await ProductStock.save({ session });
      }

      await existingBooking.save({ session });
      await session.commitTransaction();
      session.endSession();
      return existingBooking;
    }

    const result = await BookingProduct.create([payload], { session });
    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, error.message);
  }
};

const getAllBookingProductService = async (query: Record<string, unknown>) => {
  const BookingProductQuery = new QueryBuilder(
    BookingProduct.find({ isDeleted: false }).populate('ProductId'),
    query,
  )
    .search(['title', 'price'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await BookingProductQuery.modelQuery;
  const meta = await BookingProductQuery.countTotal();
  return { meta, result };
};

const getSingleBookingProductServic = async (payload: string) => {
  const existingBookingById = await BookingProduct.findById(payload);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found!!');
  }
  const result = await BookingProduct.findById(payload).populate('ProductId');
  return result;
};

const deleteSingleBookingProductServic = async (payload: string) => {
  const existingBookingById = await BookingProduct.findById(payload);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found!!');
  }
  const result = await BookingProduct.findByIdAndUpdate(
    payload,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const BookingProductService = {
  createBookingProductServic,
  getAllBookingProductService,
  getSingleBookingProductServic,
  deleteSingleBookingProductServic,
};
