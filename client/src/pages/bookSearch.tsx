// import { useState, useEffect } from 'react';
// import { searchBook } from '../api/bookAPI';
// import { review } from '../api/reviewAPI';

// const BookSearch = () => {
//     const [currentBook, setCurrentBook] = useState<Book>({
//         title: '',
//         author: '',
//         genre: ''
//     });
//     const [books, setBooks] = useState<books[]>([]);

//     const [currentIndex, setCurrentIndex] = useState<number>(0) ;

//     const [searchInput, setSearchInput] = useState<string>('');

//     const [error, setError] = useState<string | null>(null);

//     const [noBooks, setBooks] = useState<boolean>(false);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const data = await searchBook();
//                 const fetchedBooks = Books[] = data.map((book: Book) => ({
//                     title: book.title,
//                     author: book.author,
//                     genre: book.genre,

//                 }));
//                 setBooks(fetchedBooks);
//                 console.log(books);
//                 if (fetchedBooks.length === 0) {
//                     setNoBooks(true);
//                 }
//             } catch (error) {
//                 setError('Error fetching books');
//             }
//         };
//         fetchBooks();
//     }
//     , []);

//     const handleSearch = async () => {
//         try {
//             const data = await searchBook(searchInput);
//             const fetchedBooks = Books[] = data.map((book: Book) => ({
//                 title: book.title,
//                 author: book.author,
//                 genre: book.genre,
//             }));
//             setBooks(fetchedBooks);
//             setError(null);
//         }
//         setSearchInput('');
//     } catch (error) {
//         setError('Error fetching books');
//     }
//     }

import { useState, useEffect } from "react";
import { searchBook } from "../api/bookAPI"; // Assuming this is your API function

// Define the Book interface
interface Book {
  title: string;
  author: string;
  genre: string;
}

const BookSearch = () => {
  const [currentBook, setCurrentBook] = useState<Book | null>(null); // Use `null` to represent no current book
  const [books, setBooks] = useState<Book[]>([]); // Correct type for books array
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [noBooks, setNoBooks] = useState<boolean>(false); // Fixed state name conflict

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await searchBook(); // Fetch books from API
        const fetchedBooks: Book[] = data.map((book: Book) => ({
          title: book.title,
          author: book.author,
          genre: book.genre,
        }));
        setBooks(fetchedBooks);
        if (fetchedBooks.length === 0) {
          setNoBooks(true); // Handle no books found
        }
      } catch (error) {
        setError("Error fetching books");
      }
    };
    fetchBooks();
  }, []); // Empty dependency array to run only once on mount

  const handleSearch = async () => {
    try {
      const data = await searchBook(searchInput); // Pass search input to API
      const fetchedBooks: Book[] = data.map((book: Book) => ({
        title: book.title,
        author: book.author,
        genre: book.genre,
      }));
      setBooks(fetchedBooks);
      setError(null); // Clear any previous error
      if (fetchedBooks.length === 0) {
        setNoBooks(true); // Handle no books found
      } else {
        setNoBooks(false);
      }
    } catch (error) {
      setError("Error fetching books");
    }
    setSearchInput(""); // Clear search input after search
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for a book"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {noBooks && <p>No books found</p>}
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
