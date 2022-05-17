import jwt, { SignOptions } from 'jsonwebtoken';

class TokenService {
  public secret = 'segredo';

  public jwtConfig: SignOptions = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };

  public createToken = (user: object): string => {
    const token = jwt.sign(user, this.secret, this.jwtConfig);
    return token;
  };

  public decoded = (token: any): object | string => {
    const decode = jwt.verify(token, this.secret);
    return decode;
  };
}

export default TokenService;