export default function UserPage() {
  return (
    <main className="container">
      <div className="row">
        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>My Bookshelf</h2>
          <button className="btn btn-primary mb-4" type="submit">
            View Bookshelf
          </button>
          <ul className="list-group w-100">
            <li className="list-group-item">Book 1</li>
            <li className="list-group-item">Book 2</li>
            <li className="list-group-item">Book 3</li>
          </ul>
        </section>

        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>Bookmarks</h2>
          <button className="btn btn-secondary mb-4" type="submit">
            View Bookmarks
          </button>
          <ul className="list-group w-100">
            <li className="list-group-item">Bookmarked Book 1</li>
            <li className="list-group-item">Bookmarked Book 2</li>
            <li className="list-group-item">Bookmarked Book 3</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
