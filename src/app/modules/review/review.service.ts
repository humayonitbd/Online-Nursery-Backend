import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { TReview } from './review.interface';
import { Review } from './review.model';
import { Product } from '../Product/product.model';


const createServicProductReview = async (payload: TReview) => {
  const isExistProductReview = await Review.findOne({
    reviewMessage: payload.reviewMessage,
  });
  if (isExistProductReview) {
    throw new Error('Already Product Review is Exist!!');
  }
  const isExistProduct = await Product.findById(payload.productId);
  if (!isExistProduct) {
    throw new Error('Product is not found!!');
  }
// console.log('isExistProduct', isExistProduct);
const totalRating = (isExistProduct.totalRating || 1) + 1;
const ratings = (isExistProduct.rating || 0) + payload.rating;

const productPayload = {
  rating: ratings / totalRating,
  totalRating: totalRating,
};

 await Product.findByIdAndUpdate(
  payload.productId,
  productPayload,
  {
    new: true,
    runValidators: true,
  },
);
  const result = await Review.create(payload);
  return result;
};


const getAllProductServiceReview = async (query: Record<string, unknown>) => {
  const ProductReviewQuery = new QueryBuilder(Review.find(), query)
    .search(['reviewMessage'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ProductReviewQuery.modelQuery;
  const meta = await ProductReviewQuery.countTotal();
  return { meta, result };
};

const getSingleProductServicReview = async (payload: string) => {
  const existingReviewById = await Review.findById(payload);

  if (!existingReviewById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Review is not found!!');
  }
  const result = await Review.findById(payload);
  return result;
};

const deleteSingleProductServicReview = async (payload: string) => {
  const existingReviewById = await Review.findById(payload);

  if (!existingReviewById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Review is not found!!');
  }
  // Delete the product by ID
  const result = await Review.deleteOne({ _id: payload });

  // Check if a product was actually deleted
  if (result.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Review Product could not be deleted!!',
    );
  }

  return result;
};

const updateSingleProductServicReview = async (
  id: string,
  payload: Partial<TReview>,
) => {
  const existingReviewById = await Review.findById(id);

  if (!existingReviewById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Review is not found!!');
  }

  const result = await Review.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};


export const ProductReviewService = {
  createServicProductReview,
  getAllProductServiceReview,
  getSingleProductServicReview,
  deleteSingleProductServicReview,
  updateSingleProductServicReview,
  
};
