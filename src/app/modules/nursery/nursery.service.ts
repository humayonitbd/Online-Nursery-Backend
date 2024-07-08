
import QueryBuilder from '../../builder/QueryBuilder';
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

export const NurseryService = {
  createServicNursery,
  getAllNurseryService,
};
