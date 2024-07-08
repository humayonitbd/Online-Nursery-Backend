

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingNurseryService } from './bookingNursery.service';


const createBookingNursery = catchAsync(async (req, res) => {
  const result = await BookingNurseryService.createBookingNurseryServic(req.body);

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
  const result = await BookingNurseryService.getAllBookingNurseryService(req.query);

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
  const result = await BookingNurseryService.getSingleBookingNurseryServic(
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
    message: 'Booking Single Nursery are retrieved successfully!',
    data: result,
  });
});

const deleteSingleBookingNursery = catchAsync(async (req, res) => {
  const result = await BookingNurseryService.deleteSingleBookingNurseryServic(
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
    message: 'Booking Nursery is Deleted successfully!',
    data: result,
  });
});

export const BookingNurseryController = {
  createBookingNursery,
  getAllBookingNursery,
  getSingleBookingNursery,
  deleteSingleBookingNursery,
};