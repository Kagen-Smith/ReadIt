/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({
  searchResults,
}: {
  searchResults: any[];
}) => {
  return (
    <div>
      {searchResults.map((result: any, index: any) => (
        <SearchResult key={index} volumeInfo={result.volumeInfo} />
      ))}
    </div>
  );
};
