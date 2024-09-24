/**
 * Represents a page that displays search results for books.
 *
 * This component fetches book data from the Google Books API based on a query
 * parameter from the URL and displays the results using the `SearchResultsList` component.
 *
 * @component
 *
 * @typedef {Object} GoogleBook
 * @property {string} id - The unique identifier for the book.
 * @property {Object} volumeInfo - The volume information of the book.
 * @property {string} volumeInfo.title - The title of the book.
 * @property {string[]} [volumeInfo.authors] - The authors of the book.
 * @property {string[]} [volumeInfo.categories] - The categories of the book.
 * @property {string} [volumeInfo.description] - The description of the book.
 * @property {string} [volumeInfo.publishedDate] - The published date of the book.
 * @property {Object} [volumeInfo.imageLinks] - The image links of the book.
 * @property {string} [volumeInfo.imageLinks.thumbnail] - The thumbnail image of the book.
 *
 * @typedef {Object} BookData
 * @property {string} id - The unique identifier for the book.
 * @property {string} title - The title of the book.
 * @property {string} author - The author(s) of the book.
 * @property {string} genre - The genre(s) of the book.
 * @property {string} description - The description of the book.
 * @property {string} publishedDate - The published date of the book.
 * @property {string|null} thumbnail - The thumbnail image of the book.
 * @property {null} reviews - Placeholder for reviews.
 * @property {null} assignedUserId - Placeholder for assigned user ID.
 * @property {null} assignedUser - Placeholder for assigned user.
 *
 * @returns {JSX.Element} The rendered search results page.
 */

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
          <h2 className="mb-4">Search Results for: {query}</h2>
          <SearchResultsList searchResults={results} />
        </section>
      </div>
    </div>
  );
}
