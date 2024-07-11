import httpStatus from "http-status";
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
  const categoryQuery = new QueryBuilder(Category.find({isDeleted:false}), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await categoryQuery.modelQuery;
  const meta = await categoryQuery.countTotal();
  return { meta, result };
};

const getSingleCategoryServic = async (payload: string) => {
  const existingCategoryByName = await Category.findById(payload);

  if (!existingCategoryByName) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category is not found!!');
  }
  const result = await Category.findById(payload);
  return result;
};
const deleteSingleCategoryServic = async (payload: string) => {
  const existingCategoryByName = await Category.findById(payload);

  if (!existingCategoryByName) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category is not found!!');
  }
  const result = await Category.findByIdAndUpdate(
    payload,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

const updateSingleCategoryServic = async (
  id: string,
  payload: Partial<TCategory>,
) => {
  const existingCategoryByName = await Category.findById(id);

  if (!existingCategoryByName) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category is not found!!');
  }
  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const CategoryService = {
  createCategoryService,
  getAllCategoryService,
  deleteSingleCategoryServic,
  updateSingleCategoryServic,
  getSingleCategoryServic,
};
