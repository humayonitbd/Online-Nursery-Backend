import QueryBuilder from "../../builder/QueryBuilder";
import { AppError } from "../../error/AppError";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryService = async(payload:TCategory)=>{
    const isExistCategoryByName = await Category.findOne({name:payload.name});
    if(isExistCategoryByName){
        throw new Error('Already Category is Exist!!')
    }
    const result = await Category.create(payload);
    return result;

}

const getAllCategoryService = async (query: Record<string, unknown>) => {
  const categoryQuery = new QueryBuilder(Category.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await categoryQuery.modelQuery;
  const meta = await categoryQuery.countTotal();
  return { meta, result };
};

export const CategoryService = {
  createCategoryService,
  getAllCategoryService,
};
