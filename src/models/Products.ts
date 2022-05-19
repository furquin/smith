import { ResultSetHeader } from 'mysql2/promise';
import IProduct from '../Interfaces/product.interface';
import Connection from './connection';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await Connection.execute('SELECT * FROM Trybesmith.Products');
    
    return product as IProduct[];
  };

  public create = async (name: string, amount: number | string): Promise<IProduct | void> => {
    const [product] = await Connection.execute<ResultSetHeader>(
      `INSERT INTO 
      Trybesmith.Products
      (name, amount) VALUES
      (?, ?);`,
      [name, amount],
    );

    return { id: product.insertId, name, amount, orderId: null };
  };

  public getById = async (id: number): Promise<IProduct[] | void> => {
    const [product] = await Connection
      .execute('SELECT id FROM Trybesmith.Products WHERE id = ?', [id]);

    return product as IProduct[];
  };
}