export default function BookPage() {
  return (
    <main className="container">
      <div className="row">
        {/* Book Cover */}
        <aside className="col-md-5">
          <section className="d-flex justify-content-center align-items-center">
            <img
              src="path_to_book_cover_image"
              alt="Book Cover"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </section>
        </aside>

        {/* Book Information */}
        <section className="col-md-7 d-flex flex-column align-items-center text-center">
          <h2>Book Info:</h2>
          <div className="text-start" style={{ width: "100%" }}>
            <h4>Title:</h4>
            <p>Book Title</p>
            <h4>Author:</h4>
            <p>Author Name</p>
            <h4>Genre:</h4>
            <p>Genre Info</p>
            <h4>Synopsis:</h4>
            <p>Here is a brief synopsis of the book...</p>
            <h4>Publication Date:</h4>
            <p>Publication Date Info</p>
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
    </main>
  );
}
