import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../config/connection.js';
import { JWT_SECRET } from '../config/jwtConfig.js';
import bcrypt from 'bcrypt'; // Import bcrypt

const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};

const isValidPassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  console.log('Request body:', req.body);
    const { email, password } = req.body; // Change to 'email'
  
    try {
        const user = await User.findOne({ where: { email } }); // Change to 'email'
        console.log('User found:', user);
        if (!user || !(await isValidPassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
  
        const token = generateToken(user.id.toString());
        return res.status(200).json({ token, user: { id: user.id, email: user.email } }); // Change to 'email'
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const getProfile = (req: Request, res: Response): Response => {
    return res.status(200).json({ message: `Welcome user ${req.user?.id}` });
};