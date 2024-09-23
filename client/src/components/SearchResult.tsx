import { BookData } from "../interfaces/bookData"; // Import the BookData interface

interface SearchResultProps {
  book: BookData;
}

export const SearchResult = ({ book }: SearchResultProps) => {
  const { title, author, genre, description, publishedDate, thumbnail } = book;

  // Provide a fallback image in case thumbnail is null
  const defaultThumbnail = "path/to/default/image.jpg"; // You can replace this with your actual default image path

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={thumbnail || defaultThumbnail} // Use defaultThumbnail if thumbnail is null
            alt={title || "Unknown Title"} // Provide fallback for alt text
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title || "Unknown Title"}</h5>
            <p className="card-text">
              <strong>Author(s):</strong> {author || "Unknown Author"}
            </p>
            <p className="card-text">
              <strong>Genre:</strong> {genre || "Unknown Genre"}
            </p>
            <p className="card-text">
              <strong>Description:</strong>{" "}
              {description || "No description available."}
            </p>
            <p className="card-text">
              <strong>Published:</strong> {publishedDate || "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
