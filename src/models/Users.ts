import { ResultSetHeader } from 'mysql2/promise';
import Connection from './connection';

export default class ProductModel {
  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ) => {
    await Connection.execute<ResultSetHeader>(
      `INSERT INTO 
      Trybesmith.Users
      (username, classe, level, password) VALUES
      (?, ?, ?, ?);`,
      [username, classe, level, password],
    );
  };
}