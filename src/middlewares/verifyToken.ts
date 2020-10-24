import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IRequest from '../types';

interface IToken {
  id: string;
  iat: number;
  exp: number;
}

export const verifyToken = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('auth-token');
    if (!token) return res.status(404).json({ message: 'user not found' });

    const decoded = jwt.verify(token, process.env.SECRET || '') as IToken;
    req.userId = decoded.id;

    next();
  } catch (err) {
    return res.status(404).json({ message: 'unathorized' });
  }
};
