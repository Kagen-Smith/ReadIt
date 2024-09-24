import { useEffect, useState } from "react";
import BookList from "../components/booklist";
import { BookData } from "../interfaces/bookData";

const UserPage = () => {
  const [haveRead, setHaveRead] = useState<BookData[]>([]);
  const [wantToRead, setWantToRead] = useState<BookData[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isBookshelf: boolean,
    title: string | null
  ) => {
    e.preventDefault();
    if (isBookshelf) {
      let parsedHaveRead: BookData[] = JSON.parse(
        localStorage.getItem("haveRead") || "[]"
      );
      parsedHaveRead = parsedHaveRead.filter((book) => book.title !== title);
      setHaveRead(parsedHaveRead);
      localStorage.setItem("haveRead", JSON.stringify(parsedHaveRead));
    } else {
      let parsedWantToRead: BookData[] = JSON.parse(
        localStorage.getItem("wantToRead") || "[]"
      );
      parsedWantToRead = parsedWantToRead.filter(
        (book) => book.title !== title
      );
      setWantToRead(parsedWantToRead);
      localStorage.setItem("wantToRead", JSON.stringify(parsedWantToRead));
    }
  };

  useEffect(() => {
    const storedHaveRead = localStorage.getItem("haveRead");
    if (storedHaveRead) {
      setHaveRead(JSON.parse(storedHaveRead));
    }

    const storedWantToRead = localStorage.getItem("wantToRead");
    if (storedWantToRead) {
      setWantToRead(JSON.parse(storedWantToRead));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>My Bookshelf</h2>
          <p className="text-muted">A collection of books you have read:</p>
          <BookList
            books={haveRead}
            removeFromStorage={removeFromStorage}
            listLabel="Bookshelf"
          />
        </section>

        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>My Bookmarks</h2>
          <p className="text-muted">
            A collection of books you would like to read:
          </p>
          <BookList
            books={wantToRead}
            removeFromStorage={removeFromStorage}
            listLabel="Bookmarks"
          />
        </section>
      </div>
    </div>
  );
};

export default UserPage;
