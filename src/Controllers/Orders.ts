import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import OrdersService from '../Services/Orders';
import TokenService from '../Services/token';

export default class ProductsControllers {
  public service = new OrdersService();

  public token = new TokenService();

  public getAll =
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const orders = await this.service.getAll();

      return res.status(StatusCodes.OK).json(orders);
    } catch (e: unknown) {
      next(e);
    }
  };
  
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const user = this.token.decoded(authorization);
    
    try {
      const order = await this.service.create(user, productsIds);

      return res.status(StatusCodes.OK).json(order);
    } catch (e: unknown) {
      next(e);
    }
  };
}