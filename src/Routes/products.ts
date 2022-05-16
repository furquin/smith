import { Router } from 'express';
import ProductController from '../Controllers/Products';

const productController = new ProductController();

const routes = Router();

routes
  .route('/')
  .get(productController.getAll)
  .post(productController.create);

export default routes;
