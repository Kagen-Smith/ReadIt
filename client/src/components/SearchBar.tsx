import { useState } from "react";
import { BookData } from "../interfaces/bookData"; // Importing BookData interface

interface SearchBarProps {
  setResults: (results: BookData[]) => void;
}

// Define a type for the Google Books API response item
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

export function SearchBar({ setResults }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/google-books/search?query=${query}`);
      const data: GoogleBook[] = await response.json(); // Explicitly typing the API response as an array of GoogleBook

      // Transform the API response to match the `BookData` structure
      const books: BookData[] = data.map((item) => ({
        id: item.id, // Google Books API returns `id` as a string
        title: item.volumeInfo.title || "Unknown Title",
        author: item.volumeInfo.authors
          ? item.volumeInfo.authors.join(", ")
          : "Unknown Author",
        genre: item.volumeInfo.categories
          ? item.volumeInfo.categories.join(", ")
          : "Unknown Genre",
        description: item.volumeInfo.description || "No description available.",
        publishedDate: item.volumeInfo.publishedDate || "Unknown",
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
        reviews: null, // This would come from your own data, not the Google Books API
        assignedUserId: null, // These fields depend on your own app's logic
        assignedUser: null, // Same here, not from the API
      }));

      setResults(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="input-group my-2" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Start your journey here..."
      />
      <button onClick={handleSearch} className="btn btn-primary" type="button">
        Search
      </button>
    </div>
  );
}
