import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../helpers/ErrorHandler';

export function ErrorMiddleware(
  err: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err.status) {
    return res.status(err.status).json(err.message);
  }
  return res.status(500).send('Internal server error');
}
