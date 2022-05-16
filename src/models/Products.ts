import IProduct from '../Interfaces/product.interface';
import Connection from './connection';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await Connection.execute('SELECT * FROM Trybesmith.Products');
    
    return product as IProduct[];
  };
}