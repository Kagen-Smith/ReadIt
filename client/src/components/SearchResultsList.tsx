/**
 * Component that renders a list of search results.
 *
 * @param {Object} props - The component props.
 * @param {BookData[]} props.searchResults - An array of book data objects representing the search results.
 *
 * @returns {JSX.Element} A JSX element containing the list of search results.
 */

import { SearchResult } from "./SearchResult";
import { BookData } from "../interfaces/bookData";

export const SearchResultsList = ({
  searchResults,
}: {
  searchResults: BookData[];
}) => {
  return (
    <div>
      {searchResults.map((result: BookData, index: number) => (
        <SearchResult key={index} book={result} />
      ))}
    </div>
  );
};
