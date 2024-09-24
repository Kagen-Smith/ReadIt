import { useNavigate } from "react-router-dom";
import { BookData } from "../interfaces/bookData";

interface BookListProps {
  books: BookData[]; // List of books to display
  removeFromStorage: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isBookshelf: boolean, // Whether this is the bookshelf or bookmarks
    title: string | null
  ) => void;
  listLabel: string; // Label to indicate whether it's Bookshelf or Bookmarks
}

export default function BookList({
  books,
  removeFromStorage,
  listLabel,
}: BookListProps) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation to the book details page
  const goToBookDetails = (book: BookData) => {
    navigate(`/book/${book.id}`, { state: { book } }); // Navigate to BookPage with the book data
  };

  if (books.length === 0) {
    return <p>Your {listLabel} is empty!</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.title} className="card mb-3 p-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={book.thumbnail || "path_to_default_thumbnail_image"}
                alt={book.title || "Book Cover"}
                className="img-fluid"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-8 d-flex flex-column justify-content-center">
              <div className="card-body">
                <h5 className="card-title">{book.title || "Unknown Title"}</h5>
                <p className="card-text">
                  <strong>Author(s):</strong> {book.author || "Unknown Author"}
                </p>
                <p className="card-text">
                  <strong>Genre:</strong> {book.genre || "Unknown Genre"}
                </p>
                <p className="card-text">
                  <strong>Published:</strong> {book.publishedDate || "Unknown"}
                </p>

                {/* Details Button */}
                <button
                  className="btn btn-primary mt-2 me-2"
                  onClick={() => goToBookDetails(book)}
                >
                  Details
                </button>

                {/* Remove Button */}
                <button
                  className="btn btn-danger mt-2"
                  onClick={(e) =>
                    removeFromStorage(e, listLabel === "Bookshelf", book.title)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
