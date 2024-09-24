// Import the Express framework for building web applications
import express from "express";
// Import dotenv for loading environment variables from a .env file
import dotenv from "dotenv";
// Import the route definitions from the specified file
import routes from "./routes/index.js";

// Load environment variables from the .env file into process.env
dotenv.config();

// Create an instance of an Express application
const app = express();
// Set the port to the value from the environment variable or default to 3001
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies in incoming requests
app.use(express.json()); // Add this line

// Use the imported routes in the application
app.use(routes);

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message indicating the server is running
  console.log(`Server running on port ${port}`);
});