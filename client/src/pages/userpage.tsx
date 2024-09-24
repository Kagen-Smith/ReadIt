import { useEffect, useState } from "react";
import Bookmark from "../components/bookmark.js";
import Bookshelf from "../components/bookshelf.js";
import { BookData } from "../interfaces/bookData.js";

const UserPage = () => {
  const [haveRead, setHaveRead] = useState<BookData[]>([]);
  const [wantToRead, setWantToRead] = useState<BookData[]>([]);
  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentlyOnShelf: boolean | null | undefined,
    currentlyReading: boolean | null | undefined,
    title: string | null
  ) => {
    e.preventDefault();
    if  (currentlyOnShelf) {
      let parsedHaveRead: BookData[] = [];

      const storedhaveRead = localStorage.getItem("haveRead");
      if (typeof storedhaveRead === "string") {
        parsedHaveRead = JSON.parse(storedhaveRead);
      }
      parsedHaveRead = parsedHaveRead.filter((book: BookData) => book.title !== title);
      setHaveRead(parsedHaveRead);
      localStorage.setItem("haveRead", JSON.stringify(parsedHaveRead));
    } else if (currentlyReading) {
      let parsedWantToRead: BookData[] = [];

      const storedWantToRead = localStorage.getItem("wantToRead");
      if (typeof storedWantToRead === "string") {
        parsedWantToRead = JSON.parse(storedWantToRead);
      }
      parsedWantToRead = parsedWantToRead.filter((book: BookData) => book.title !== title);
      setWantToRead(parsedWantToRead);
      localStorage.setItem("wantToRead", JSON.stringify(parsedWantToRead));
    }
  }

  useEffect(() => {
    const storedHaveRead = localStorage.getItem("haveRead");
    if (typeof storedHaveRead === "string") {
      setHaveRead(JSON.parse(storedHaveRead));
    }

    const storedWantToRead = localStorage.getItem("wantToRead");
    if (typeof storedWantToRead === "string") {
      setWantToRead(JSON.parse(storedWantToRead));
    }
  }
  , []);


  return (
    <div className="container">
      <div className="row">
        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>My Bookshelf</h2>
          <Bookshelf haveRead={haveRead} removeFromStorage={removeFromStorage} />
        </section>

        <section className="col-md-6 d-flex flex-column align-items-center text-center">
          <h2>Bookmarks</h2>
          <Bookmark wantToRead={wantToRead} removeFromStorage={removeFromStorage} />
        </section>
      </div>
    </div>
  );
}

export default UserPage;

