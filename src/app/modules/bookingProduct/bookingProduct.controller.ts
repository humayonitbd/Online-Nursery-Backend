

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingProductService } from './bookingProduct.service';


const createBookingProduct = catchAsync(async (req, res) => {
  const result = await BookingProductService.createBookingProductServic(
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
    message: 'Booking Payment Product is successfully!!',
    data: result,
  });
});

const getAllBookingProduct = catchAsync(async (req, res) => {
  const result = await BookingProductService.getAllBookingProductService(
    req.query
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
    message: 'Booking Product are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

// const getSingleBookingProduct = catchAsync(async (req, res) => {
//   const result = await BookingProductService.getSingleBookingProductServic(
//     req.params.id,
//   );

//   if (!result) {
//     sendResponse(res, {
//       success: false,
//       statusCode: httpStatus.NOT_FOUND,
//       message: 'No Data Found!',
//       data: [],
//     });
//   }

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Booking Single Product are retrieved successfully!',
//     data: result,
//   });
// });

// const deleteSingleBookingProduct = catchAsync(async (req, res) => {
//   const result = await BookingProductService.deleteSingleBookingProductServic(
//     req.params.id,
//   );

//   if (!result) {
//     sendResponse(res, {
//       success: false,
//       statusCode: httpStatus.NOT_FOUND,
//       message: 'No Data Found!',
//       data: [],
//     });
//   }

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Booking Product is Deleted successfully!',
//     data: result,
//   });
// });

export const BookingProductController = {
  createBookingProduct,
  getAllBookingProduct,
  // getSingleBookingProduct,
  // deleteSingleBookingProduct,
};