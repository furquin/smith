import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import UserService from '../Services/Users';

export default class ValidateData {
  constructor(private productService = new UserService()) { }
 
  public userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().required().min(3),
    level: Joi.number().required().min(1),
    password: Joi.string().required().min(8),
  });

  public validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.userSchema.validate(req.body);
      
    if (error) {
      if (error?.message.includes('required')) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
      } 
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: error?.message });
    }
    
    next();
  };
}