import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import { JWT_SECRET } from '../config/jwtConfig.js';

const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
  };
  
export const login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { username } });
      if (!user || user.password !== password) { 
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user.id.toString());
      return res.status(200).json({ token, user: { id: user.id, username: user.username } });
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  };  
  
export const getProfile = (req: Request, res: Response): Response => {
  return res.status(200).json({ message: `Welcome user ${req.user?.id}` });
};