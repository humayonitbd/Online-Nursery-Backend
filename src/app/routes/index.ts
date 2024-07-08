import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { NurseryRoutes } from '../modules/nursery/nursery.route';


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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
