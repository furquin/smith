import { Router } from 'express';
import OrdersControllers from '../Controllers/Orders';

const ordersController = new OrdersControllers();

const routes = Router();

routes
  .route('/')
  .get(ordersController.getAll);

export default routes;
