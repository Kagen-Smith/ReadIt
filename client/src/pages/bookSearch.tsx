import { useState, useEffect } from 'react';
import { retrieveBooks } from '../api/bookAPI.js';

interface Book {
    title: string;
    author: string;
    genre: string;
}

const BookSearch = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [searchInput, setSearchInput] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [noBooks, setNoBooks] = useState<boolean>(false);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await retrieveBooks();
                const fetchedBooks: Book[] = data.map((book: Book) => ({
                    title: book.title,
                    author: book.author,
                    genre: book.genre,
                }));
                setBooks(fetchedBooks);
                setNoBooks(fetchedBooks.length === 0);
            } catch (error) {
                setError('Error fetching books');
            }
        };
        fetchBooks();
    }, []);

    const handleSearch = async () => {
        try {
            const data = await retrieveBooks(); // Adjust if searchInput is needed
            const fetchedBooks: Book[] = data.map((book: Book) => ({
                title: book.title,
                author: book.author,
                genre: book.genre,
            }));
            setBooks(fetchedBooks);
            setNoBooks(fetchedBooks.length === 0);
            setError(null);
            setSearchInput('');
        } catch (error) {
            setError('Error fetching books');
        }
    };

    const selectBook = (index: number) => {
        setCurrentIndex(index);
    };

    const currentBook = currentIndex !== null ? books[currentIndex] : null;

    return (
        <div>
            <input 
                type="text" 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
                placeholder="Search for a book..." 
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p>{error}</p>}
            {noBooks && <p>No books found.</p>}

            <ul>
                {books.map((book, index) => (
                    <li key={index} onClick={() => selectBook(index)}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.genre}</p>
                    </li>
                ))}
            </ul>

            {currentBook && (
                <div>
                    <h2>Selected Book:</h2>
                    <h3>{currentBook.title}</h3>
                    <p>{currentBook.author}</p>
                    <p>{currentBook.genre}</p>
                </div>
            )}
        </div>
    );
};

export default BookSearch;