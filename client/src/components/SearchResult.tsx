// Define the structure of volumeInfo
interface VolumeInfo {
  title: string;
  authors?: string[];
  publisher?: string;
  // Add other properties based on your API response
}

interface SearchResultProps {
  volumeInfo: VolumeInfo;
}

export const SearchResult = ({ volumeInfo }: SearchResultProps) => {
  return (
    <div>
      <h2>{volumeInfo.title}</h2>
      {volumeInfo.authors && <p>Authors: {volumeInfo.authors.join(', ')}</p>}
      {volumeInfo.publisher && <p>Publisher: {volumeInfo.publisher}</p>}
    </div>
  );
};