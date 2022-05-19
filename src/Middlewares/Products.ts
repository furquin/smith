import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import ProductService from '../Services/Products';

export default class ValidateData {
  constructor(private productService = new ProductService()) { }
 
  public productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().required().min(3),
  });

  public validateProduct = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.productSchema.validate(req.body);
      
    if (error) {
      if (error?.message.includes('required')) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
      }
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: error?.message });
    }
    
    next();
  };

  public productExists = async (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    
    await Object.values(productsIds).map(async (_prod, index) => {
      const product = await this.productService.getById(productsIds[index]);        
      if (product.length === 0) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: `Product, id:${productsIds[index]} does not exist found` });
      }
    });

    next();
  };
}