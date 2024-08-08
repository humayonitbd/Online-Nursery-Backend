import { Schema, model } from 'mongoose';
import { TReplayReview } from './replay.review.interface';

const ProductReplayReviewSchema = new Schema<TReplayReview>(
  {
    replayReviewMessage: {
      type: String,
      required: [true, 'Product Replay Review is required'],
    },
    reviewAddDate: {
      type: String,
      required: [true, 'Review add date is required'],
    },
    ratingUserName: {
      type: String,
      required: [true, 'Review user name is required'],
    },
    replayReviewUserEmail: {
      type: String,
      required: [true, 'Review user Email is required'],
    },
    ratingUserImg: {
      type: String,
      required: [true, 'Review user image is required'],
    },
    likeTotal: { type: Number, default: 0 },
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
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

export const ReplayReview = model<TReplayReview>(
  'ReplayReview',
  ProductReplayReviewSchema,
);
