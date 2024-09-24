/**
 * Component that displays a search result card for a book.
 * 
 * @component
 * @param {SearchResultProps} props - The properties for the SearchResult component.
 * @param {BookData} props.book - The book data to display in the search result card.
 * 
 * @returns {JSX.Element} A JSX element representing the search result card.
 * 
 * @example
 * ```tsx
 * const book = {
 *   id: "1",
 *   title: "Example Book",
 *   author: "John Doe",
 *   genre: "Fiction",
 *   publishedDate: "2021-01-01",
 *   thumbnail: "path/to/thumbnail.jpg"
 * };
 * 
 * <SearchResult book={book} />
 * ```
 */

import { BookData } from "../interfaces/bookData";
import { useNavigate } from "react-router-dom";

interface SearchResultProps {
  book: BookData;
}

export const SearchResult = ({ book }: SearchResultProps) => {
  const { id, title, author, genre, publishedDate, thumbnail } = book;
  const navigate = useNavigate();

  const defaultThumbnail = "../../assets/defaultCover.jpg";

  const handleCardClick = () => {
    navigate(`/book/${id}`, { state: { book } });
  };

  return (
    <div
      className="card mb-3"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={thumbnail || defaultThumbnail}
            alt={title || "Unknown Title"}
            className="img-fluid m-4"
          />
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center h-100">
          <div className="card-body">
            <h4 className="card-title mb-4">
              <strong>{title || "Unknown Title"}</strong>
            </h4>
            <p className="card-text">
              <strong>Author(s):</strong> {author || "Unknown Author"}
            </p>
            <p className="card-text">
              <strong>Genre:</strong> {genre || "Unknown Genre"}
            </p>
            <p className="card-text">
              <strong>Published:</strong> {publishedDate || "Unknown"}
            </p>
            <button className="btn btn-primary mt-3" onClick={handleCardClick}>
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
