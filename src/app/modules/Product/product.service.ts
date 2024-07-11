import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { seatchFiledByProduct } from './product.constant';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createServicProduct = async (payload: TProduct) => {
  const isExistCategoryByName = await Product.findOne({ title: payload.title });
  if (isExistCategoryByName) {
    throw new Error('Already Product is Exist!!');
  }
  const result = await Product.create(payload);
  return result;
};

const getAllProductService = async (query: Record<string, unknown>) => {
  const ProductQuery = new QueryBuilder(
    Product.find({ isDeleted: false }),
    query,
  )
    .search(seatchFiledByProduct)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ProductQuery.modelQuery;
  const meta = await ProductQuery.countTotal();
  return { meta, result };
};

const getSingleProductServic = async (payload: string) => {
  const existingBookingById = await Product.findById(payload);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found!!');
  }
  const result = await Product.findById(payload);
  return result;
};

const deleteSingleProductServic = async (payload: string) => {
  const existingBookingById = await Product.findById(payload);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found!!');
  }
  const result = await Product.findByIdAndUpdate(
    payload,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};
const updateSingleProductServic = async (
  id: string,
  payload: Partial<TProduct>,
) => {
  const existingBookingById = await Product.findById(id);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found!!');
  }
  

  if(existingBookingById.isDeleted === true){
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found!!');
  }
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ProductService = {
  createServicProduct,
  getAllProductService,
  getSingleProductServic,
  deleteSingleProductServic,
  updateSingleProductServic,
};
