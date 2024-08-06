import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

const ProductReviewSchema = new Schema<TReview>(
  {
    reviewMessage: {
      type: String,
      required: [true, 'Product Review is required'],
    },
    reviewAddDate: {
      type: String,
      required: [true, 'Review add date is required'],
    },
    ratingUserName: {
      type: String,
      required: [true, 'Review user name is required'],
    },
    ratingUserImg: {
      type: String,
      required: [true, 'Review user image is required'],
    },
    rating: {
      type: Number,
      required: [true, 'Product Rating is required'],
      min: 0,
      max: 5,
    },
    likeTotal: { type: Number, default: 0 },
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
  },
  {
    timestamps: true,
  },
);

export const Review = model<TReview>('Review', ProductReviewSchema);
