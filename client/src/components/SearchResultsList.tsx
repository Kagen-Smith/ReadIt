// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { SearchResult } from "./SearchResult";

// export const SearchResultsList = ({
//   searchResults,
// }: {
//   searchResults: any[];
// }) => {
//   return (
//     <div>
//       {searchResults.map((result: any, index: any) => (
//         <SearchResult key={index} volumeInfo={result.volumeInfo} />
//       ))}
//     </div>
//   );
// };

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
