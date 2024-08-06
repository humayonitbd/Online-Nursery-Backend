import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductReviewService } from './review.service';

const createReviewProduct = catchAsync(async (req, res) => {
  const result = await ProductReviewService.createServicProductReview(req.body);

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
    message: 'Review Added successfully!!',
    data: result,
  });
});

const getAllProductReview = catchAsync(async (req, res) => {
  const result = await ProductReviewService.getAllProductServiceReview(req.query);

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
    message: 'Review are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleProductReview = catchAsync(async (req, res) => {
  const result = await ProductReviewService.getSingleProductServicReview(
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
    message: 'Single Review are retrieved successfully!',
    data: result,
  });
});

const deleteSingleProductReview = catchAsync(async (req, res) => {
  const result = await ProductReviewService.deleteSingleProductServicReview(
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
    message: 'Single Review are deleted successfully!',
    data: result,
  });
});

const updateSingleProductReview = catchAsync(async (req, res) => {
  const result = await ProductReviewService.updateSingleProductServicReview(
    req.params.id,
    req.body,
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
    message: 'Single Review are Updated successfully!',
    data: result,
  });
});




export const ProductReviewController = {
  createReviewProduct,
  getAllProductReview,
  getSingleProductReview,
  deleteSingleProductReview,
  updateSingleProductReview
};


