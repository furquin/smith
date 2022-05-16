import express from 'express';
import error from './Middlewares/Error';
import ProductRoute from './Routes/products';
import UsersRoute from './Routes/users';

const app = express();

app.use(express.json());
app.use('/products', ProductRoute);
app.use('/users', UsersRoute);
app.use(error);

export default app;
