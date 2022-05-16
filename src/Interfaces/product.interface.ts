interface IProduct {
  id: number;
  name: string;
  amount: number | string;
  orderId: number | null;    
}

export default IProduct;