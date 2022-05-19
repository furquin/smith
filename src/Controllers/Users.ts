import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserService from '../Services/Users';
import TokenService from '../Services/token';

export default class UsersControllers {
  public service = new UserService();

  public token = new TokenService();

  public create =
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { username, classe, level, password } = req.body;

      const payload = { name: username };

      await this.service.create(username, classe, level, password);
      
      const token = await this.token.createToken(payload);

      return res.status(StatusCodes.CREATED).json({ token });
    } catch (e) {
      next(e);
    }
  };
}