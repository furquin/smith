import express from 'express';
import error from './Middlewares/Error';
import ProductRoute from './Routes/products';

const app = express();

app.use(express.json());
app.use('/products', ProductRoute);
app.use(error);

export default app;
