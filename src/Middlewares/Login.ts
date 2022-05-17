import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import LoginService from '../Services/Login';

export default class ValidateData {
  constructor(private loginService = new LoginService()) { }
 
  public userSchema = Joi.object({
    username: Joi.required(),
    password: Joi.required(),
  });
    
  public validateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const user = await this.loginService.getUser(username, password);

    if (user.length === 0) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
      
    next();
  };

  public validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.userSchema.validate(req.body);
      
    if (error?.message.includes('required')) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
    
    next();
  };
}