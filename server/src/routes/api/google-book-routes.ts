import express, { Request, Response } from "express"; // Import express and types for request and response
import axios from "axios"; // Import axios for making HTTP requests
import dotenv from "dotenv"; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

const router = express.Router(); // Create a new router instance
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes"; // Base URL for Google Books API

// API route to search for books
router.get("/search", async (req: Request, res: Response) => {
  try {
    const { query } = req.query; // Extract query parameter from request

    // Validate query
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: "Query parameter is required." }); // Return 400 if query is invalid
    }

    console.log(`${GOOGLE_BOOKS_API_URL}?q=${query}`); // Log the API request URL for debugging

    const response = await axios.get(GOOGLE_BOOKS_API_URL, {
      params: {
        q: query, // Include the search query in the API request
      },
    });

    // Check if items exist in the response
    if (response.data.items) {
      return res.json(response.data.items); // Return the list of books as a JSON response
    } else {
      return res.json([]); // Return an empty array if no items found
    }
  } catch (error) {
    console.error("Error fetching books:", error); // Log the error
    return res.status(500).send("Internal Server Error"); // Send a 500 error response on failure
  }
});

export default router; // Export the router