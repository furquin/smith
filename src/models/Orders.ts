import { ResultSetHeader } from 'mysql2/promise';
import Connection from './connection';
import IOrders from '../Interfaces/orders.interface';

export default class ProductModel {
  public getAll = async (): Promise<IOrders[]> => {
    const [orders] = await Connection.execute('SELECT * FROM Trybesmith.Orders ');
    const [products] = await Connection.execute('SELECT orderId, id FROM Trybesmith.Products');
    
    const ordersProducts: Array<IOrders> = Object.values(orders)
      .map((order) => ({
        id: order.id,
        userId: order.userId,
        productsIds: [],
      }));
    
    Object.values(products).forEach((product) => {
      Object.values(orders).forEach((order, index) => {
        if (order.id === product.orderId) {
          ordersProducts[index].productsIds.push(product.id);
        } 
      });
    });
    
    return ordersProducts as IOrders[];
  };

  public create = async (userId: number, productsIds: Array<number>): Promise<void> => {
    const [order] = await Connection.execute<ResultSetHeader>(
      `INSERT INTO 
      Trybesmith.Orders
      (userId) VALUES
      (?);`,
      [userId],
    );

    Object.values(productsIds).map(async (_prod, index) => {
      await Connection.execute(`
      UPDATE Trybesmith.Products
      SET
      orderId = ?
      WHERE id = ?;`, [order.insertId, productsIds[index]]);
    });
  };
}