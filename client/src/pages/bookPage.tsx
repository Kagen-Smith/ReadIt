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

  // Add book to the bookshelf and navigate to /userPage
  const addToBookshelf = () => {
    const storedHaveRead = localStorage.getItem("haveRead");
    const haveRead: BookData[] = storedHaveRead
      ? JSON.parse(storedHaveRead)
      : [];

    // Avoid duplicate entries
    if (!haveRead.find((b) => b.title === title)) {
      haveRead.push(book);
      localStorage.setItem("haveRead", JSON.stringify(haveRead));
      alert(`${title} has been added to your bookshelf!`);
    }

    // Navigate to userPage after adding the book
    navigate("/userPage");
  };

  // Add book to bookmarks and navigate to /userPage
  const addToBookmarks = () => {
    const storedWantToRead = localStorage.getItem("wantToRead");
    const wantToRead: BookData[] = storedWantToRead
      ? JSON.parse(storedWantToRead)
      : [];

    // Avoid duplicate entries
    if (!wantToRead.find((b) => b.title === title)) {
      wantToRead.push(book);
      localStorage.setItem("wantToRead", JSON.stringify(wantToRead));
      alert(`${title} has been added to your bookmarks!`);
    }

    // Navigate to userPage after adding the book
    navigate("/userPage");
  };

  // Navigate back to search results
  const returnToSearchResults = () => {
    navigate(-1); // This navigates to the previous page
  };

  return (
    <div className="container">
      <div className="mt-3">
        <p
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={returnToSearchResults}
        >
          &larr; Return to Search Results
        </p>
      </div>

      <div className="row">
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center mb-4">
          <img
            src={thumbnail || "path_to_default_thumbnail_image"}
            alt={title || "Book Cover"}
            className="img-fluid mb-4"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />

          {auth.loggedIn() && (
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <button
                className="btn btn-primary mb-2"
                type="button"
                onClick={addToBookshelf}
              >
                Add to Bookshelf
              </button>
              <button
                className="btn btn-secondary mb-2"
                type="button"
                onClick={addToBookmarks}
              >
                Add to Bookmarks
              </button>
            </div>
          )}
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
        </section>
      </div>
    </div>
  );
}
