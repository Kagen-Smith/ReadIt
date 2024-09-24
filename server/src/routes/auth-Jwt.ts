import { Request, Response } from 'express'; // Import Request and Response types from express
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for creating JWTs
import { User } from '../config/connection.js'; // Import User model for database queries
import { JWT_SECRET } from '../config/jwtConfig.js'; // Import JWT secret from config
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

// Function to generate a JWT token
const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' }); // Sign the token with user ID and expiration
};

// Function to validate a password against a hashed password
const isValidPassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword); // Compare plain and hashed passwords
};

// Login function to authenticate user
export const login = async (req: Request, res: Response): Promise<Response> => {
    console.log('Request body:', req.body); // Log the incoming request body
    const { email, password } = req.body; // Extract email and password from request body
  
    try {
        const user = await User.findOne({ where: { email } }); // Find user by email
        console.log('User found:', user); // Log the found user
        // Check if user exists and if the password is valid
        if (!user || !(await isValidPassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' }); // Return 401 if invalid
        }
  
        const token = generateToken(user.id.toString()); // Generate JWT token for the user
        // Return token and user info in response
        return res.status(200).json({ token, user: { id: user.id, email: user.email } }); 
    } catch (error) {
        console.error('Login error:', error); // Log any errors during login
        return res.status(500).json({ message: 'Server error' }); // Return 500 for server error
    }
};

// Function to get user profile
export const getProfile = (req: Request, res: Response): Response => {
    // Return a welcome message with the user's ID
    return res.status(200).json({ message: `Welcome user ${req.user?.id}` });
};