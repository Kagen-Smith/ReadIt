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
