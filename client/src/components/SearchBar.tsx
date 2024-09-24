/**
 * SearchBar component allows users to input a search query and navigate to the search results page.
 *
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 *
 * @returns {JSX.Element} The rendered search bar component.
 *
 * @remarks
 * This component uses React's `useState` to manage the search query state and `useNavigate` from `react-router-dom` to handle navigation.
 *
 * @function
 * @name SearchBar
 *
 * @description
 * The `SearchBar` component renders an input field and a button. When the user types a query and presses Enter or clicks the search button,
 * the component navigates to the search results page with the query as a URL parameter.
 *
 * @hook
 * @name useState
 * @description Manages the state of the search query.
 *
 * @hook
 * @name useNavigate
 * @description Provides navigation functionality to redirect the user to the search results page.
 *
 * @event
 * @name handleSearch
 * @description Triggers the navigation to the search results page if the query is not empty.
 *
 * @event
 * @name handleKeyUp
 * @description Listens for the Enter key press to trigger the search.
 *
 * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event triggered on key up.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

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
