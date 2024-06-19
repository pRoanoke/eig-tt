import {NextFunction, Request, Response} from "express";


const allowedMethods = ['GET', 'POST'];

export function methodNotAllowed(req: Request, res: Response, next: NextFunction) {
  if (!allowedMethods.includes(req.method.toLowerCase())) {
    res.status(405).send('Not allowed');
  } else {
    next();
  }
}