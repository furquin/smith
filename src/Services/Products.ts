import ProductModel from '../models/Products';
import IProduct from '../Interfaces/product.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();

    return products;
  };

  public create = async (name: string, amount: number | string): Promise<IProduct | void> => {
    const product = await this.model.create(name, amount);

    return product;
  };

  public getById = async (id: number): Promise<IProduct[]> => {
    const products = await this.model.getById(id);

    return products as IProduct[];
  };
}
