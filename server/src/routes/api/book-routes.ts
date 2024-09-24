import express, { Request, Response } from "express"; // Import express and types for request and response
import axios from "axios"; // Import axios for making HTTP requests
import dotenv from "dotenv"; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

const router = express.Router(); // Create a new router instance
const NYTIMES_API_KEY = process.env.NYTIMES_API_KEY; // Retrieve the NYT API key from environment variables
const NYTIMES_BASE_URL = "https://api.nytimes.com/svc/books/v3"; // Base URL for NYT Books API

// API route to get book covers
router.get("/book-covers", async (_req: Request, res: Response) => {
  try {
    // Fetch the list of categories from the NYT Books API
    const categoryResponse = await axios.get(
      `${NYTIMES_BASE_URL}/lists/names.json`,
      {
        params: { "api-key": NYTIMES_API_KEY }, // Include API key in query params
      }
    );

    const categories = categoryResponse.data.results; // Extract categories from the response

    // Create promises to fetch books for each category
    const bookPromises = categories.map(async (category: any) => {
      const { list_name_encoded } = category;

      try {
        // Fetch books for the current category
        const booksResponse = await axios.get(
          `${NYTIMES_BASE_URL}/lists/current/${list_name_encoded}.json`,
          { params: { "api-key": NYTIMES_API_KEY } } // Include API key in query params
        );

        // Extract and return book images
        return booksResponse.data.results.books.map(
          (book: any) => book.book_image // Map to book images
        );
      } catch (error) {
        // Log the error for debugging (commented out)
        // console.error(
        //   `Error fetching books for category ${list_name_encoded}:`,
        //   error
        // );
        return []; // Return an empty array if there's an error fetching books
      }
    });

    // Wait for all book cover promises to resolve and flatten the result
    const allBookCovers = (await Promise.all(bookPromises))
      .flat()
      .join(",") // Join covers into a single string
      .split(","); // Split back into an array

    res.json(allBookCovers); // Send the book covers as JSON response
  } catch (error) {
    // Log the error for debugging (commented out)
    // console.error("Error fetching book categories:", error);
    res.status(500).send("Internal Server Error"); // Send a 500 error response on failure
  }
});

export default router; // Export the router