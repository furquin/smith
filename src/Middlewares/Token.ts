import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TokenService from '../Services/token';

export default class ValidateData {
  constructor(private tokenService = new TokenService()) { }
 
  public validateToken = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    try {
      if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
      }
      this.tokenService.decoded(authorization);

      next();
    } catch (e) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    } 
  };
}