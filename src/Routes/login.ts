import { Router } from 'express';
import LoginController from '../Controllers/Login';
import LoginMiddlewares from '../Middlewares/Login';

const loginController = new LoginController();
const loginMiddlewares = new LoginMiddlewares();

const routes = Router();

routes
  .route('/')
  .post(loginMiddlewares.validateLogin, loginMiddlewares.validateUser, loginController.login);

export default routes;
