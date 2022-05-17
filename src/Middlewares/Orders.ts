import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import OrderService from '../Services/Orders';

export default class ValidateData {
  constructor(private orderService = new OrderService()) { }
 
  public orderSchema = Joi.object({
    productsIds: Joi.array().min(1).required(),
  });

  public validateOrder = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.orderSchema.validate(req.body);
      
    if (error) {
      if (error?.message.includes('required')) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
      }
      if (error?.message.includes('contain')) {
        return res
          .status(StatusCodes.UNPROCESSABLE_ENTITY)
          .json({ message: '"productsIds" must include only numbers' });
      }
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: error?.message });
    }
    
    next();
  };
}