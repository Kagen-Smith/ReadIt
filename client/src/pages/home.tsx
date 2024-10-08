/**
 * Home component renders the main landing page of the application.
 * It includes a header, a logo, and a search bar for users to find books.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */

import Logo from "../assets/logoOnly.png";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <section className="d-flex flex-column align-items-center text-center">
          <h2>Find, Organize, and Never Lose Track of a Book Again!</h2>
          <img src={Logo} alt="logo" className="my-3" />
          <SearchBar />
        </section>
      </div>
    </div>
  );
}
