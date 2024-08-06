import { Types } from "mongoose"

export type TReview = {
  rating: number;
  reviewMessage:string;
  productId: Types.ObjectId;
  reviewAddDate:string;
  ratingUserName:string;
  ratingUserImg:string;
  likeTotal:number;
};