import { Types } from "mongoose";


export type TNursery = {
  categoryId: Types.ObjectId;
  title: string;
  price: number;
  rating: number;
  image: string;
  details: string;
  stock:number;
  isDeleted: boolean;
};