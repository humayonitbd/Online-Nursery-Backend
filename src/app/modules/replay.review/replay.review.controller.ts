import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductReplayReviewService } from './replay.review.service';


const createReplayReviewProduct = catchAsync(async (req, res) => {
  const result = await ProductReplayReviewService.createServicProductReplayReview(req.body);

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
    message: 'Replay Review Added successfully!!',
    data: result,
  });
});

const getAllProductReplayReview = catchAsync(async (req, res) => {
  const result = await ProductReplayReviewService.getAllProductServiceReplayReview(
    req.query,
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
    message: 'Replay Review are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleProductReplayReview = catchAsync(async (req, res) => {
  const result = await ProductReplayReviewService.getSingleProductServicReplayReview(
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
    message: 'Single Replay Review are retrieved successfully!',
    data: result,
  });
});

const deleteSingleProductReplayReview = catchAsync(async (req, res) => {
  const result = await ProductReplayReviewService.deleteSingleProductServicReplayReview(
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
    message: 'Single Replay Review are deleted!',
    data: result,
  });
});

const updateSingleProductReplayReview = catchAsync(async (req, res) => {
  const result = await ProductReplayReviewService.updateSingleProductServicReplayReview(
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
    message: 'Single Replay Review are Updated!',
    data: result,
  });
});

export const ProductReplayReviewController = {
  createReplayReviewProduct,
  getAllProductReplayReview,
  getSingleProductReplayReview,
  deleteSingleProductReplayReview,
  updateSingleProductReplayReview,
};
