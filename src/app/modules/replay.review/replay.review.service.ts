import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { Product } from '../Product/product.model';
import { TReplayReview } from './replay.review.interface';
import { ReplayReview } from './replay.review.model';

const createServicProductReplayReview = async (payload: TReplayReview) => {
  const isExistProductReview = await ReplayReview.findOne({
    replayReviewMessage: payload.replayReviewMessage,
  });
  if (isExistProductReview) {
    throw new Error('Already Product Review is Exist!!');
  }
  const isExistProduct = await Product.findById(payload.productId);
  if (!isExistProduct) {
    throw new Error('Product is not found!!');
  }
  
  const result = await ReplayReview.create(payload);
  return result;
};

const getAllProductServiceReplayReview = async (query: Record<string, unknown>) => {
  const ProductReplayReviewQuery = new QueryBuilder(ReplayReview.find(), query)
    .search(['replayReviewMessage'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ProductReplayReviewQuery.modelQuery;
  const meta = await ProductReplayReviewQuery.countTotal();
  return { meta, result };
};

const getSingleProductServicReplayReview = async (payload: string) => {
  const existingReviewById = await ReplayReview.findById(payload);

  if (!existingReviewById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Replay Review is not found!!');
  }
  const result = await ReplayReview.findById(payload);
  return result;
};

const deleteSingleProductServicReplayReview = async (payload: string) => {
  const existingReviewById = await ReplayReview.findById(payload);

  if (!existingReviewById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Review is not found!!');
  }
  // Delete the product by ID
  const result = await ReplayReview.deleteOne({ _id: payload });

  // Check if a product was actually deleted
  if (result.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Review Product could not be deleted!!',
    );
  }

  return result;
};

const updateSingleProductServicReplayReview = async (
  id: string,
  payload: Partial<TReplayReview>,
) => {
  const existingReviewById = await ReplayReview.findById(id);

  if (!existingReviewById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Review is not found!!');
  }

  const result = await ReplayReview.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ProductReplayReviewService = {
  createServicProductReplayReview,
  getAllProductServiceReplayReview,
  getSingleProductServicReplayReview,
  deleteSingleProductServicReplayReview,
  updateSingleProductServicReplayReview,
};
