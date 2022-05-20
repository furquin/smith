import { Router } from 'express';
import OrdersControllers from '../Controllers/Orders';
import TokenMiddlewares from '../Middlewares/Token';
import OrderMiddlewares from '../Middlewares/Orders';
import ProductsMiddlewares from '../Middlewares/Products';

const ordersController = new OrdersControllers();
const tokenMiddlewares = new TokenMiddlewares();
const orderMiddlewares = new OrderMiddlewares();
const productMiddlewares = new ProductsMiddlewares();

const routes = Router();

routes
  .route('/')
  .get(ordersController.getAll)
  .post(
    tokenMiddlewares.validateToken,
    orderMiddlewares.validateOrder,
    productMiddlewares.productExists,
    ordersController.create,
  );

export default routes;
