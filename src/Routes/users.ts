import { Router } from 'express';
import UsersControllers from '../Controllers/Users';
import UsersMiddlewares from '../Middlewares/Users';

const usersControllers = new UsersControllers();
const usersMiddlewares = new UsersMiddlewares();

const routes = Router();

routes
  .route('/')
  .post(usersMiddlewares.validateUser, usersControllers.create);
export default routes;
