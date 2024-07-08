

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';


const createBookingNursery = catchAsync(async (req, res) => {
  const result = await NurseryService.createServicNursery(req.body);

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
    message: 'Booking Nursery is successfully!!',
    data: result,
  });
});

const getAllBookingNursery = catchAsync(async (req, res) => {
  const result = await NurseryService.getAllNurseryService(req.query);

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
    message: 'Booking Nursery are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleBookingNursery = catchAsync(async (req, res) => {
  const result = await NurseryService.getAllNurseryService(req.params.id);

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
    message: 'Booking Nursery are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

const deleteSingleBookingNursery = catchAsync(async (req, res) => {
  const result = await NurseryService.getAllNurseryService(req.params.id);

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
    message: 'Booking Nursery is Deleted successfully!',
    meta: result.meta,
    data: result.result,
  });
});

export const BookingNurseryController = {
  createBookingNursery,
  getAllBookingNursery,
  getSingleBookingNursery,
  deleteSingleBookingNursery,
};