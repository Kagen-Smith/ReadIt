/**
 * Header component that includes a Navbar and a SearchBar.
 *
 * @returns {JSX.Element} The rendered header component.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */

import Navbar from "../components/navbar.tsx";
import { SearchBar } from "../components/SearchBar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="w-100 mb-5 shadow d-flex justify-content-end light-background">
        <div className="mx-2">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
