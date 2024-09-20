import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../config/jwtConfig.js';

interface JwtPayload {
  id: string; 
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void | Response => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    
    (req as any).user = decoded;

    return next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};