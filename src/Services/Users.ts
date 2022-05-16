import UsersModel from '../models/Users';

export default class ProductService {
  public model = new UsersModel();

  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ) => {
    await this.model.create(username, classe, level, password);
  };
}
