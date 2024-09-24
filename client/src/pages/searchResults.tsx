import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookData } from "../interfaces/bookData";
import { SearchResultsList } from "../components/SearchResultsList";

interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    categories?: string[];
    description?: string;
    publishedDate?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export default function SearchResultsPage() {
  const [results, setResults] = useState<BookData[]>([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        try {
          const response = await fetch(
            `/api/google-books/search?query=${query}`
          );
          const data: GoogleBook[] = await response.json();

          const books: BookData[] = data.map((item: GoogleBook) => ({
            id: item.id,
            title: item.volumeInfo.title || "Unknown Title",
            author: item.volumeInfo.authors
              ? item.volumeInfo.authors.join(", ")
              : "Unknown Author",
            genre: item.volumeInfo.categories
              ? item.volumeInfo.categories.join(", ")
              : "Unknown Genre",
            description:
              item.volumeInfo.description || "No description available.",
            publishedDate: item.volumeInfo.publishedDate || "Unknown",
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
            reviews: null,
            assignedUserId: null,
            assignedUser: null,
          }));

          setResults(books);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <div className="container">
      <div className="row">
        <section className="d-flex flex-column align-items-center text-center">
          <h2>Search Results for: {query}</h2>
          <SearchResultsList searchResults={results} />
        </section>
      </div>
    </div>
  );
}
