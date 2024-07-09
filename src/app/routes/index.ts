import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { NurseryRoutes } from '../modules/nursery/nursery.route';
import { BookingNurseryRoutes } from '../modules/bookingNursery/bookingNursery.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
    {
      path: '/category',
      route: CategoryRoutes,
    },
    {
      path: '/nursery',
      route: NurseryRoutes,
    },
    {
      path: '/nursery-booking',
      route: BookingNurseryRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
