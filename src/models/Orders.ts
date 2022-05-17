import Connection from './connection';
import IOrders from '../Interfaces/orders.interface';

export default class ProductModel {
  public getAll = async (): Promise<IOrders[]> => {
    const [orders] = await Connection.execute(
      'SELECT * FROM Trybesmith.Orders ',
    );
    return orders as IOrders[];
  };
}