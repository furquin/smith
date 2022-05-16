import { Router } from 'express';
import UsersControllers from '../Controllers/Users';

const usersControllers = new UsersControllers();

const routes = Router();

routes
  .route('/')
  .post(usersControllers.create);
export default routes;
