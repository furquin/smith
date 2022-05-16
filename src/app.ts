import express from 'express';
import error from './Middlewares/error';

const app = express();

app.use(express.json());
app.use(error);

export default app;
