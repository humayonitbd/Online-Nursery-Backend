import express from 'express';
import { ProductReviewValidation } from './review.validation';
import validateRequest from '../../middlewares/validateRequest';
import { ProductReviewController } from './review.controller';
import { ProductReviewLikeController } from '../review.like/review.like.controller';

const router = express.Router();

router.post(
  '/add-review',
  validateRequest(ProductReviewValidation.createProductReviewValidationSchema),
  ProductReviewController.createReviewProduct
);
router.get('/like', ProductReviewLikeController.getAllProductReviewLike);
router.get('/', ProductReviewController.getAllProductReview);
router.get('/:id', ProductReviewController.getSingleProductReview);
router.delete('/:id', ProductReviewController.deleteSingleProductReview);
router.put(
  '/:id',
  validateRequest(ProductReviewValidation.updateProductReviewValidationSchema),
  ProductReviewController.updateSingleProductReview,
);

router.post('/add-like', ProductReviewLikeController.createReviewLike);
router.delete(
  '/like/:id',
  ProductReviewLikeController.deleteSingleProductReviewLike,
);

export const ProductReviewRoutes = router;
