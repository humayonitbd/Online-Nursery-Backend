import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductReviewLikeService } from "./review.like.service";

const createReviewLike = catchAsync(async (req, res) => {
  const result = await ProductReviewLikeService.createServicProductReviewLike(
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
    message: 'Review Liked Added successfully!!',
    data: result,
  });
});


const getAllProductReviewLike = catchAsync(async (req, res) => {
  const result = await ProductReviewLikeService.getAllProductServiceReviewLike(
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
    message: 'Review like are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

const deleteSingleProductReviewLike = catchAsync(async (req, res) => {
  const result = await ProductReviewLikeService.deleteSingleProductServicReviewLike(
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
    message: 'Single Review like are deleted successfully!',
    data: result,
  });
});


export const ProductReviewLikeController = {
  createReviewLike,
  getAllProductReviewLike,
  deleteSingleProductReviewLike,
};
