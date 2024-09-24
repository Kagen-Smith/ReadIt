import jwt from 'jsonwebtoken'; // Import jsonwebtoken library for handling JWTs
import { Request, Response, NextFunction } from 'express'; // Import types from express
import { JWT_SECRET } from '../config/jwtConfig.js'; // Import the JWT secret from the configuration

// Define the shape of the JWT payload
interface JwtPayload {
  id: string; 
}

// Middleware to verify JWT token
export const verifyToken = (req: Request, res: Response, next: NextFunction): void | Response => {
  // Extract token from Authorization header
  const token = req.headers.authorization?.split(' ')[1];

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' }); // Unauthorized response if token is missing
  }

  try {
    // Verify the token using the secret and cast the decoded payload
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    
    // Attach the decoded user information to the request object
    (req as any).user = decoded;

    return next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' }); // Forbidden response if token verification fails
  }
};