import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { Product } from '../Product/product.model';
import mongoose from 'mongoose';
import { TBookingProduct } from './bookingProduct.interface';
import { BookingProduct } from './bookingProduct.model';

const createBookingProductServic = async (payload: TBookingProduct) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const ProductStock = await Product.findById(payload.orderProductId).session(
      session,
    );
    if (!ProductStock) {
      throw new AppError(404, 'Product not found!');
    }

      if (ProductStock && ProductStock.stock < payload.orderProductQuantity) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Product is out of stock!');
      } else {
        ProductStock.stock -= payload.orderProductQuantity;
        await ProductStock.save({ session });
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
    BookingProduct.find().populate('orderProductId'),
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

const deleteSingleConformProductServic = async (id: string) => {
  const existingBookingById = await BookingProduct.findById(id);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking Product is not found!!');
  }

  // Delete the product by ID
  const result = await BookingProduct.deleteOne({ _id: id });

  // Check if a product was actually deleted
  if (result.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Booking Product could not be deleted!!',
    );
  }

  return result;
};


export const BookingProductService = {
  createBookingProductServic,
  getAllBookingProductService,
  deleteSingleConformProductServic,
};
