import ILogin from '../Interfaces/login.interface';
import Connection from './connection';

export default class ProductModel {
  public getUser = async (username: string, password: string): Promise<ILogin[]> => {
    const [user] = await Connection.execute(
      `SELECT id, username, password 
      FROM Trybesmith.Users WHERE username=? and password=?`,
      [username, password],
    );
    
    return user as ILogin[];
  };
}