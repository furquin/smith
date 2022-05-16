import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';

const error = (err:ErrorRequestHandler, _req:Request, res:Response, __next:NextFunction) => {
  console.error(err);
  return res.status(500).end();
};

export default error;