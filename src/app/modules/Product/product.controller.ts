
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';


const createNursery = catchAsync(async (req, res) => {
  const result = await ProductService.createServicProduct(req.body);

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found!',
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product Create successfully!!',
    data: result,
  });
});

const getAllNursery = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProductService(req.query);

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found!',
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleNursery = catchAsync(async (req, res) => {
  const result = await ProductService.getSingleProductServic(
    req.params.id,
  );

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found!',
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Product are retrieved successfully!',
    data: result,
  });
});

const deleteSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductService.deleteSingleProductServic(req.params.id);

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found!',
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Product are deleted successfully!',
    data: result,
  });
});
const updateSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductService.updateSingleProductServic(
    req.params.id,req.body
  );

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found!',
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Product are Updated successfully!',
    data: result,
  });
});

export const NurseryController = {
  createNursery,
  getAllNursery,
  getSingleNursery,
  deleteSingleProduct,
  updateSingleProduct,
};