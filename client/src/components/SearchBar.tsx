import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export function SearchBar() {
  // No longer need props here
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleSearch = () => {
    if (!query.trim()) return; // Prevent search with an empty query

    // Navigate to the search results page with the query as a URL parameter
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input-group my-2" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="New book search..."
      />
      <button onClick={handleSearch} className="btn btn-primary" type="button">
        Search
      </button>
    </div>
  );
}
