import { Router, Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const NYTIMES_API_KEY = process.env.NYTIMES_API_KEY;

router.get('/book-categories', async (_req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers.json', {
      params: {
        'api-key': NYTIMES_API_KEY,
      },
    });

    const categories = response.data.results;
    const top20Categories = categories.slice(0, 20);

    res.json(top20Categories);
  } catch (error) {
    console.error('Error fetching book categories:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;