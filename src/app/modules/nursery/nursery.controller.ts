
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NurseryService } from './nursery.service';


const createNursery = catchAsync(async (req, res) => {
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
    message: 'Nursery Create successfully!!',
    data: result,
  });
});

const getAllNursery = catchAsync(async (req, res) => {
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
    message: 'Nursery are retrieved successfully!',
    meta: result.meta,
    data: result.result,
  });
});

export const NurseryController = {
  createNursery,
  getAllNursery,
};