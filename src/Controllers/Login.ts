import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import LoginService from '../Services/Login';
import TokenService from '../Services/token';

export default class UsersControllers {
  public service = new LoginService();

  public token = new TokenService();

  public login =
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { username, password } = req.body;

      const user = await this.service.getUser(username, password);
        
      const payload = { id: user[0].id, name: username };
        
      const token = await this.token.createToken(payload);
      
      return res.status(StatusCodes.OK).json({ token });
    } catch (e) {
      next(e);
    }
  };
}