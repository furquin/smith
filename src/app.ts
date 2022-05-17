import express from 'express';
import error from './Middlewares/Error';
import ProductRoute from './Routes/products';
import UsersRoute from './Routes/users';
import OrdersRoute from './Routes/orders';

const app = express();

app.use(express.json());
app.use('/products', ProductRoute);
app.use('/users', UsersRoute);
app.use('/orders', OrdersRoute);
app.use(error);

export default app;
