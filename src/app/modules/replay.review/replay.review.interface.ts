import { Types } from 'mongoose';

export type TReplayReview = {
  replayReviewMessage: string;
  productId: Types.ObjectId;
  reviewId: Types.ObjectId;
  reviewAddDate: string;
  ratingUserName: string;
  replayReviewUserEmail: string;
  ratingUserImg: string;
  likeTotal: number;
};
