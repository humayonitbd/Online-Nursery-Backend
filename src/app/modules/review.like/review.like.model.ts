import { Schema, model } from 'mongoose';
import { TReviewLike } from './review.like.interface';

const ProductReviewLikeSchema = new Schema<TReviewLike>(
  {
    email: {
      type: String,
      required: [true, 'Review email is required'],
    },
    like: {
      type: Boolean,
      required: [true, 'Review Like is required'],
    },
    reviewId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Review',
    },
  },
  {
    timestamps: true,
  },
);

export const ReviewLike = model<TReviewLike>('ReviewLike', ProductReviewLikeSchema);
