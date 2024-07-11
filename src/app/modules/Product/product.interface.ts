import { Types } from "mongoose";


export type TProduct = {
  category: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  stock: number;
  brand: string;
  isDeleted?: boolean;
};

 