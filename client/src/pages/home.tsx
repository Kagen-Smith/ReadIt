import Logo from "../assets/logoOnly.png";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { useState } from "react";
import { BookData } from "../interfaces/bookData"; // Import BookData interface

export default function Home() {
  // Define state to hold search results as an array of BookData objects
  const [results, setResults] = useState<BookData[]>([]);

  return (
    <main className="container">
      <div className="row">
        <section className="d-flex flex-column align-items-center text-center">
          <h2>Find, Organize, and Never Lose Track of a Book Again!</h2>
          <img src={Logo} alt="logo" className="my-3" />
          {/* Pass setResults to SearchBar */}
          <SearchBar setResults={setResults} />
          {/* Pass the results to SearchResultsList */}
          <SearchResultsList searchResults={results} />
        </section>
      </div>
    </main>
  );
}
