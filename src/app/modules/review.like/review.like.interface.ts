import { Types } from "mongoose";

export type TReviewLike ={
    email:string;
    reviewId:Types.ObjectId;
    like:boolean;
    
}