import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import OrdersService from '../Services/Orders';

export default class ProductsControllers {
  public service = new OrdersService();

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
}