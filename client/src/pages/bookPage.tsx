import { useLocation } from "react-router-dom";
import { BookData } from "../interfaces/bookData";

export default function BookPage() {
  const location = useLocation();
  const book: BookData | undefined = location.state?.book;

  if (!book) {
    return <p>Loading book details...</p>;
  }

  const { title, author, genre, description, publishedDate, thumbnail } = book;

  return (
    <div className="container">
      <div className="row">
        <aside className="col-md-5">
          <section className="d-flex justify-content-center align-items-center">
            <img
              src={thumbnail || "path_to_default_thumbnail_image"}
              alt={title || "Book Cover"}
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </section>
        </aside>

        <section className="col-md-7 d-flex flex-column align-items-center text-center">
          <h2>Book Info:</h2>
          <div className="text-start" style={{ width: "100%" }}>
            <h4>Title:</h4>
            <p>{title || "Unknown Title"}</p>
            <h4>Author:</h4>
            <p>{author || "Unknown Author"}</p>
            <h4>Genre:</h4>
            <p>{genre || "Unknown Genre"}</p>
            <h4>Synopsis:</h4>
            <p>{description || "No description available."}</p>
            <h4>Publication Date:</h4>
            <p>{publishedDate || "Unknown"}</p>
          </div>
          <div
            className="d-flex justify-content-between mt-4"
            style={{ width: "100%" }}
          >
            <button className="btn btn-primary" type="button">
              Add to Bookshelf
            </button>
            <button className="btn btn-secondary" type="button">
              Add to Bookmarks
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
