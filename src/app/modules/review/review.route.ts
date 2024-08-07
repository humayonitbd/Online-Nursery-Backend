import express from 'express';
import { ProductReviewValidation } from './review.validation';
import validateRequest from '../../middlewares/validateRequest';
import { ProductReviewController } from './review.controller';
import { ProductReviewLikeController } from '../review.like/review.like.controller';
import { ProductReplayReviewController } from '../replay.review/replay.review.controller';

const router = express.Router();

router.post(
  '/add-review',
  validateRequest(ProductReviewValidation.createProductReviewValidationSchema),
  ProductReviewController.createReviewProduct
);
router.get('/like', ProductReviewLikeController.getAllProductReviewLike);
router.get(
  '/replay-review',
  ProductReplayReviewController.getAllProductReplayReview,
);
router.get('/', ProductReviewController.getAllProductReview);
router.get('/:id', ProductReviewController.getSingleProductReview);
router.delete('/:id', ProductReviewController.deleteSingleProductReview);
router.put(
  '/:id',
  validateRequest(ProductReviewValidation.updateProductReviewValidationSchema),
  ProductReviewController.updateSingleProductReview,
);

router.post('/add-like', ProductReviewLikeController.createReviewLike);
router.put(
  '/like/:id',
  ProductReviewLikeController.deleteSingleProductReviewLike,
);

//replay review route here
router.post(
  '/add-replay-review',
  ProductReplayReviewController.createReplayReviewProduct,
);

router.get(
  '/replay-review/:id',
  ProductReplayReviewController.getSingleProductReplayReview,
);
router.delete(
  '/replay-review/:id',
  ProductReplayReviewController.deleteSingleProductReplayReview,
);
router.put(
  '/replay-review/:id',
  // validateRequest(ProductReviewValidation.updateProductReviewValidationSchema),
  ProductReplayReviewController.updateSingleProductReplayReview,
);

export const ProductReviewRoutes = router;
