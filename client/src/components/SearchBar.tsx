/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export function SearchBar({ setResults }: { setResults: any }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
    const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/auth/books";
    try {
      const response = await fetch(
        `${GOOGLE_BOOKS_API_URL}/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`
      );
      const data = await response.json();
      setResults(data.items);
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
