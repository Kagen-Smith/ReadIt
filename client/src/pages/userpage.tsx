import { useEffect, useState } from "react";
import Bookmark from "../components/bookmark.js";
import Bookshelf from "../components/bookshelf.js";
import { BookData } from "../interfaces/bookData.js";

const UserPage = () => {
  const [haveRead, setHaveRead] = useState<BookData[]>([]);
  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentlyOnShelf: boolean | null | undefined,
    currentlyReading: boolean | null | undefined,
    title: string | null
  )  => {
    e.preventDefault();
    if (currentlyOnShelf) {
      console.log(title);
      let parsedBooks: BookData[] = [];

      const storedBooks = localStorage.getItem("haveRead");
      if (typeof storedBooks === "string") {
        parsedBooks = JSON.parse(storedBooks);
      }
      parsedBooks = parsedBooks.filter((book) => book.title !== title);
      localStorage.setItem("haveRead", JSON.stringify(parsedBooks));
    } else if (currentlyReading) {
      console.log(title);
      let parsedBooks: BookData[] = [];

      const storedBooks = localStorage.getItem("currentlyReading");
      if (typeof storedBooks === "string") {
        parsedBooks = JSON.parse(storedBooks);
      }
      parsedBooks = parsedBooks.filter((book) => book.title !== title);
      localStorage.setItem("currentlyReading", JSON.stringify(parsedBooks));
    }
  }
  useEffect(() => {
    let parsedBooks: BookData[] = [];

    const storedBooks = localStorage.getItem("haveRead");
    if (typeof storedBooks === "string") {
      parsedBooks = JSON.parse(storedBooks);
    }
    setHaveRead(parsedBooks);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>My Bookshelf</h2>
          <Bookshelf wantToRead={haveRead} removeFromStorage={removeFromStorage} />
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
    </div>
  );
}

export default UserPage;

