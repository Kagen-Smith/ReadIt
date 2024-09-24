/**
 * BookPage component displays detailed information about a selected book.
 * It retrieves the book data from the location state and displays various details
 * such as title, author, genre, description, publication date, and thumbnail.
 * If the user is logged in, it provides options to add the book to the bookshelf
 * or bookmarks.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying book details.
 *
 * @example
 * // Example usage:
 * // <Route path="/bookPage" element={<BookPage />} />
 *
 * @remarks
 * This component uses React Router's `useLocation` to access the book data passed
 * via the location state and `useNavigate` to navigate to the user page.
 *
 * @requires useLocation
 * @requires useNavigate
 * @requires BookData
 * @requires auth
 */

import { useLocation, useNavigate } from "react-router-dom";
import { BookData } from "../interfaces/bookData";
import auth from "../utils/auth";

export default function BookPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const book: BookData | undefined = location.state?.book;

  if (!book) {
    return <p>Loading book details...</p>;
  }

  const { title, author, genre, description, publishedDate, thumbnail } = book;

  const goToUserPage = () => {
    navigate("/userPage");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center mb-4">
          <img
            src={thumbnail || "path_to_default_thumbnail_image"}
            alt={title || "Book Cover"}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <section className="col-md-8 d-flex flex-column text-start">
          <h2 className="mb-4">Book Details:</h2>
          <div style={{ width: "100%" }}>
            <h4>Title:</h4>
            <p>{title || "Unknown Title"}</p>
            <h4>Author(s):</h4>
            <p>{author || "Unknown Author"}</p>
            <h4>Genre:</h4>
            <p>{genre || "Unknown Genre"}</p>
            <h4>Synopsis:</h4>
            <p>{description || "No description available."}</p>
            <h4>Publication Date:</h4>
            <p>{publishedDate || "Unknown"}</p>
          </div>

          {auth.loggedIn() && (
            <div
              className="d-flex justify-content-between mt-4"
              style={{ width: "100%" }}
            >
              <button
                className="btn btn-primary"
                type="button"
                onClick={goToUserPage}
              >
                Add to Bookshelf
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={goToUserPage}
              >
                Add to Bookmarks
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
