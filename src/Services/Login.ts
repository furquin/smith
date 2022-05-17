import LoginModel from '../models/Login';
import ILogin from '../Interfaces/login.interface';

export default class ProductService {
  public model = new LoginModel();

  public getUser = async (username: string, password: string): Promise<ILogin[]> => {
    const user = await this.model.getUser(username, password);

    return user;
  };
}
