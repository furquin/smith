import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import ProductService from '../Services/Products';

export default class ProductsControllers {
  public service = new ProductService();

  public getAll =
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const products = await this.service.getAll();

      return res.status(StatusCodes.OK).json(products);
    } catch (e: unknown) {
      next(e);
    }
  };
  
  public create =
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { name, amount } = req.body;
      const product = await this.service.create(name, amount);

      return res.status(StatusCodes.CREATED).json(product);
    } catch (e) {
      next(e);
    }
  };
}