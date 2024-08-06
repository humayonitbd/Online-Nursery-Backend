import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { TReviewLike } from './review.like.interface';
import { ReviewLike } from './review.like.model';
import { Review } from '../review/review.model';

const createServicProductReviewLike = async (payload: TReviewLike) => {

    const isExistingReview = await Review.findById(payload.reviewId);
    if(!isExistingReview){
        throw new AppError(httpStatus.NOT_FOUND, "Review is not found!!");
    }
    

  if (payload?.like) {
    const payloadData = {
      likeTotal: isExistingReview.likeTotal + 1,
    };

  const  reviewResult = await Review.findByIdAndUpdate(payload.reviewId, payloadData, {
      new: true,
      runValidators: true,
    });
  } 


  const result = await ReviewLike.create(payload);
  return result;
};

const getAllProductServiceReviewLike = async (query: Record<string, unknown>) => {
  const ProductReviewLikeQuery = new QueryBuilder(ReviewLike.find(), query)
    .search(['email'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ProductReviewLikeQuery.modelQuery;
  const meta = await ProductReviewLikeQuery.countTotal();
  return { meta, result };
};

const deleteSingleProductServicReviewLike = async (payload: string) => {
  const existingReviewLikeById = await ReviewLike.findById(payload);

  if (!existingReviewLikeById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Review like is not found!!');
  }
  // Delete the product by ID
  const result = await ReviewLike.deleteOne({ _id: payload });

  // Check if a product was actually deleted
  if (result.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Review Product could not be deleted!!',
    );
  }

  return result;
};


export const ProductReviewLikeService = {
  createServicProductReviewLike,
  deleteSingleProductServicReviewLike,
  getAllProductServiceReviewLike,
};
