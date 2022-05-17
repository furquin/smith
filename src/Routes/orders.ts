import { Router } from 'express';
import OrdersControllers from '../Controllers/Orders';
import TokenMiddlewares from '../Middlewares/Token';
import OrderMiddlewares from '../Middlewares/Orders';

const ordersController = new OrdersControllers();
const tokenMiddlewares = new TokenMiddlewares();
const orderMiddlewares = new OrderMiddlewares();

const routes = Router();

routes
  .route('/')
  .get(ordersController.getAll)
  .post(tokenMiddlewares.validateToken, orderMiddlewares.validateOrder, ordersController.create);

export default routes;
