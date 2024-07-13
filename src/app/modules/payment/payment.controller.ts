import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentService } from './payment.service';


const createPaymentSecret = catchAsync(async (req, res) => {
  const result = await PaymentService.createPaymentSecret(req.body);

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
    message: 'Payment Secret Create successfully!!',
    data: result,
  });
});




export const PaymentController = {
  createPaymentSecret,
  
};
