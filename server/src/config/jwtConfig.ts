import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

// Export JWT_SECRET, falling back to 'default-secret' if not defined
export const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';