import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const NYTIMES_API_KEY = process.env.NYTIMES_API_KEY;
const NYTIMES_BASE_URL = "https://api.nytimes.com/svc/books/v3";

// API route to get book covers
router.get("/book-covers", async (_req: Request, res: Response) => {
  try {
    const categoryResponse = await axios.get(
      `${NYTIMES_BASE_URL}/lists/names.json`,
      {
        params: { "api-key": NYTIMES_API_KEY },
      }
    );

    const categories = categoryResponse.data.results;

    const bookPromises = categories.map(async (category: any) => {
      const { list_name_encoded } = category;

      try {
        const booksResponse = await axios.get(
          `${NYTIMES_BASE_URL}/lists/current/${list_name_encoded}.json`,
          { params: { "api-key": NYTIMES_API_KEY } }
        );

        // Extract and return book images
        return booksResponse.data.results.books.map(
          (book: any) => book.book_image
        );
      } catch (error) {
        console.error(
          `Error fetching books for category ${list_name_encoded}:`,
          error
        );
        return [];
      }
    });

    const allBookCovers = (await Promise.all(bookPromises))
      .flat()
      .join(",")
      .split(",");

    res.json(allBookCovers);
  } catch (error) {
    console.error("Error fetching book categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
