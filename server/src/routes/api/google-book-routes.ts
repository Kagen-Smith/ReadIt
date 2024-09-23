// import express, { Request, Response, query } from "express";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();
// const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
// const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/auth/books";

// // API route to search for books

// router.get("/search", async (req: Request, res: Response) => {
//   try {
//     const { query } = req.query;

//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: {
//         q: query,
//         key: GOOGLE_BOOKS_API_KEY,
//       },
//     });

//     res.json(response.data.items);
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// router.get("/book-covers", async (_req: Request, res: Response) => {
//   try {
//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: {
//         q: query,
//         key: GOOGLE_BOOKS_API_KEY,
//       },
//     });

//     const bookCovers = response.data.items.map(
//       (item: any) => item.volumeInfo.imageLinks.thumbnail
//     );

//     res.json(bookCovers);
//   } catch (error) {
//     console.error("Error fetching book covers:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //api rout to get book details
// router.get("/book-details", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.query;

//     const response = await axios.get(
//       `${GOOGLE_BOOKS_API_URL}/v1/volumes/${id}`,
//       {
//         params: { key: GOOGLE_BOOKS_API_KEY },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching book details:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //api route to get book reviews
// router.get("/book-reviews", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.query;

//     const response = await axios.get(
//       `${GOOGLE_BOOKS_API_URL}/v1/volumes/${id}/reviews`,
//       {
//         params: { key: GOOGLE_BOOKS_API_KEY },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching book reviews:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// //api route to get book categories
// router.get("/book-categories", async (_req: Request, res: Response) => {
//   try {
//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: { key: GOOGLE_BOOKS_API_KEY },
//     });

//     const categories = response.data.items.map(
//       (item: any) => item.volumeInfo.categories
//     );

//     res.json(categories);
//   } catch (error) {
//     console.error("Error fetching book categories:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// //api to get book authors
// router.get("/book-authors", async (_req: Request, res: Response) => {
//   try {
//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: { key: GOOGLE_BOOKS_API_KEY },
//     });

//     const authors = response.data.items.map(
//       (item: any) => item.volumeInfo.authors
//     );

//     res.json(authors);
//   } catch (error) {
//     console.error("Error fetching book authors:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// //api to get book ratings
// router.get("/book-ratings", async (_req: Request, res: Response) => {
//   try {
//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: { key: GOOGLE_BOOKS_API_KEY },
//     });

//     const ratings = response.data.items.map(
//       (item: any) => item.volumeInfo.averageRating
//     );

//     res.json(ratings);
//   } catch (error) {
//     console.error("Error fetching book ratings:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// //api for filterign books
// router.get("/filter", async (req: Request, res: Response) => {
//   try {
//     const { query } = req.query;

//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: {
//         q: query,
//         key: GOOGLE_BOOKS_API_KEY,
//       },
//     });

//     res.json(response.data.items);
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //api to get book titles
// router.get("/book-titles", async (_req: Request, res: Response) => {
//   try {
//     const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/v1/volumes`, {
//       params: { key: GOOGLE_BOOKS_API_KEY },
//     });

//     const titles = response.data.items.map(
//       (item: any) => item.volumeInfo.title
//     );

//     res.json(titles);
//   } catch (error) {
//     console.error("Error fetching book titles:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// export default router;
import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

// API route to search for books
router.get("/search", async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    const response = await axios.get(`${GOOGLE_BOOKS_API_URL}`, {
      params: {
        q: query,
        key: GOOGLE_BOOKS_API_KEY,
      },
    });

    res.json(response.data.items);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
