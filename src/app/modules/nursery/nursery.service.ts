
import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { seatchFiledByNursery } from './nursery.constant';
import { TNursery } from './nursery.interface';
import { Nursery } from './nursery.model';



const createServicNursery= async (payload: TNursery) => {
  const isExistCategoryByName = await Nursery.findOne({ title: payload.title });
  if (isExistCategoryByName) {
    throw new Error('Already Nursery is Exist!!');
  }
  const result = await Nursery.create(payload);
  return result;
};

const getAllNurseryService = async (query: Record<string, unknown>) => {
  const nurseryQuery = new QueryBuilder(
    Nursery.find({isDeleted:false}).populate('categoryId'),
    query,
  )
    .search(seatchFiledByNursery)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await nurseryQuery.modelQuery;
  const meta = await nurseryQuery.countTotal();
  return { meta, result };
};

const getSingleNurseryServic = async (payload: string) => {
  const existingBookingById = await Nursery.findById(payload);

  if (!existingBookingById) {
    throw new AppError(httpStatus.NOT_FOUND, 'Nursery is not found!!');
  }
  const result = await Nursery.findById(payload).populate('categoryId');
  return result;
};

export const NurseryService = {
  createServicNursery,
  getAllNurseryService,
  getSingleNurseryServic,
};
