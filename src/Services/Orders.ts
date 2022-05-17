import OrdersModel from '../models/Orders';
import IOrders from '../Interfaces/orders.interface';

export default class ProductService {
  public model = new OrdersModel();

  public getAll = async (): Promise<IOrders[] > => {
    const orders = await this.model.getAll();

    return orders;
  };
}
