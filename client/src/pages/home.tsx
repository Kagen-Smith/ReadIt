import Logo from "../assets/logoOnly.png";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { useState } from "react";

export default function Home() {
  // Define state to hold search results
  const [results, setResults] = useState<string[]>([]);

  return (
    <main className="container">
      <div className="row">
        <section className="d-flex flex-column align-items-center text-center">
          <h2>Find, Organize, and Never Lose Track of a Book Again!</h2>
          <img src={Logo} alt="logo" className="my-3" />
          {/* <div className="input-group my-2" style={{ maxWidth: "400px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Start your journey here..."
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div> */}
          {/* Pass setResults to SearchBar */}
          <SearchBar setResults={setResults} />
          {/* Pass the results to SearchResultsList */}
          <SearchResultsList searchResults={results} />
        </section>
      </div>
    </main>
  );
}
