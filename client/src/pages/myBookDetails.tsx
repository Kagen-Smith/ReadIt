import { useLocation, useNavigate } from "react-router-dom";
import { BookData } from "../interfaces/bookData";

export default function MyBookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const book: BookData | undefined = location.state?.book;

  if (!book) {
    return <p>Loading book details...</p>;
  }

  const { title, author, genre, description, publishedDate, thumbnail } = book;

  // Navigate back to userPage
  const returnToMyAccount = () => {
    navigate("/userPage"); // This navigates to the user page
  };

  return (
    <div className="container">
      <div className="mt-3">
        <p
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={returnToMyAccount}
        >
          &larr; Return to My Account
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
