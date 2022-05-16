import { Router } from 'express';
import ProductController from '../Controllers/Products';
import ProductsMiddlewares from '../Middlewares/Products';

const productController = new ProductController();
const productsMiddlewares = new ProductsMiddlewares();

const routes = Router();

routes
  .route('/')
  .get(productController.getAll)
  .post(productsMiddlewares.validateProduct, productController.create);

export default routes;
