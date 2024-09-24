// Import the Request type from the Express framework
import { Request } from "express";

// Declare a global namespace to extend the Express types
declare global {
  namespace Express {
    // Extend the Request interface to include an optional 'user' property
    interface Request {
      user?: {
        id: string; // The user object may contain an 'id' of type string
      };
    }
  }
}