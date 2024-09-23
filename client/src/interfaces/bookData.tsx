import { UserData } from "./userData";
import { ReviewData } from "./reviewData";

export interface BookData {
  id: string; // Google Books uses string IDs, not numbers
  title: string;
  author: string; // Single author or multiple authors could be handled as an array
  genre: string | null; // Genres are typically found under `categories`
  description: string | null; // Book description (synopsis)
  publishedDate: string | null; // Publication date
  thumbnail: string | null; // URL for the book cover thumbnail
  reviews: ReviewData[] | null;
  assignedUserId: number | null;
  assignedUser: UserData | null;
}
